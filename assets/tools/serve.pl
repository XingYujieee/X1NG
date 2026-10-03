#!/usr/bin/perl
# Minimal static file server (core Perl only) — fallback when python3 is unavailable.
use strict; use warnings; use IO::Socket::INET;
my $port = shift || 8000; my $root = shift || '.';
my %mime = (html=>'text/html; charset=utf-8', js=>'text/javascript; charset=utf-8', mjs=>'text/javascript', css=>'text/css; charset=utf-8',
  json=>'application/json', svg=>'image/svg+xml', webp=>'image/webp', jpg=>'image/jpeg', jpeg=>'image/jpeg', png=>'image/png',
  gif=>'image/gif', ico=>'image/x-icon', woff2=>'font/woff2', woff=>'font/woff', txt=>'text/plain; charset=utf-8', mp4=>'video/mp4', md=>'text/plain; charset=utf-8');
my $srv = IO::Socket::INET->new(LocalAddr=>'127.0.0.1', LocalPort=>$port, Listen=>64, ReuseAddr=>1) or die "Cannot listen on $port: $!\n";
$SIG{CHLD} = 'IGNORE';
print "Serving on http://localhost:$port\n";
while (my $c = $srv->accept) {
  my $pid = fork; if (!defined $pid || $pid) { close $c; next; }
  my $req = <$c> // ''; my %h;
  while (my $l = <$c>) { last if $l =~ /^\r?\n$/; }
  my ($m, $u) = $req =~ /^(GET|HEAD) (\S+)/;
  if (!$m) { print $c "HTTP/1.0 405 Method Not Allowed\r\n\r\n"; exit 0; }
  $u =~ s/[?#].*//; $u =~ s/%([0-9A-Fa-f]{2})/chr(hex($1))/ge;
  $u = '/index.html' if $u eq '/'; $u .= 'index.html' if $u =~ m{/$};
  if ($u =~ /\.\./) { print $c "HTTP/1.0 403 Forbidden\r\n\r\n"; exit 0; }
  my $f = "$root$u";
  if (-f $f && open(my $fh, '<:raw', $f)) {
    my ($ext) = $f =~ /\.([^.\/]+)$/; my $type = $mime{lc($ext // '')} // 'application/octet-stream';
    my $size = -s $f;
    print $c "HTTP/1.0 200 OK\r\nContent-Type: $type\r\nContent-Length: $size\r\nCache-Control: no-cache\r\nConnection: close\r\n\r\n";
    if ($m eq 'GET') { local $/ = \65536; while (my $b = <$fh>) { print $c $b; } }
  } else { print $c "HTTP/1.0 404 Not Found\r\nContent-Type: text/plain\r\n\r\nNot found: $u\n"; }
  close $c; exit 0;
}
