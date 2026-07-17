import http.server, socketserver, os, urllib.parse
ROOT="/home/sami/_projects/xenobladex-org-static/docs"; PREFIX="/xenobladex-static"
class H(http.server.SimpleHTTPRequestHandler):
    def translate_path(self,path):
        p=urllib.parse.urlparse(path).path
        if p.startswith(PREFIX): p=p[len(PREFIX):]
        return os.path.normpath(os.path.join(ROOT,p.lstrip('/')))
    def do_GET(self):
        p=urllib.parse.urlparse(self.path).path
        rel=p[len(PREFIX):] if p.startswith(PREFIX) else p
        fp=self.translate_path(self.path)
        if not os.path.isfile(fp) and '.' not in os.path.basename(rel) and '/attachment/' not in rel:
            self.path=PREFIX+'/index.html'
        return super().do_GET()
    def log_message(self,*a): pass
os.chdir(ROOT)
socketserver.TCPServer.allow_reuse_address=True
with socketserver.TCPServer(("127.0.0.1",8098),H) as httpd: httpd.serve_forever()
