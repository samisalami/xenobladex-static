import http.server, socketserver, os, posixpath, urllib.parse
ROOT="/home/sami/_projects/xenobladex-org-static/docs"
class H(http.server.SimpleHTTPRequestHandler):
    def translate_path(self,path):
        p=urllib.parse.urlparse(path).path
        fp=os.path.normpath(os.path.join(ROOT,p.lstrip('/')))
        return fp
    def do_GET(self):
        p=urllib.parse.urlparse(self.path).path
        fp=self.translate_path(self.path)
        if not os.path.isfile(fp) and '.' not in os.path.basename(p) and not p.startswith('/xenobladex/attachment/'):
            self.path='/index.html'  # SPA fallback
        return super().do_GET()
    def log_message(self,*a): pass
os.chdir(ROOT)
with socketserver.TCPServer(("127.0.0.1",8099),H) as httpd:
    httpd.serve_forever()
