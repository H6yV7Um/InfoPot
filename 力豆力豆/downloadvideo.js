var password = document.getElementsByClassName('note_password');
password[0].value = 'panasia';
var note_submit = document.getElementsByClassName('note_submit');
note_submit[0].click();


console.log(link)

var videos = document.getElementsByTagName('video');
console.log(videos)
var link = [];
console.log('共' + videos.length + '个视频：')
for(var i = 0; i < videos.length; i++) {
	link.push(videos[i].currentSrc)
	// downloadFile('test', videos[i].currentSrc)
	console.log(videos[i].currentSrc)
	console.log(videos[i].srcObject)
	window.open(videos[i].currentSrc, '_blank')

}


function downloadFile(fileName, content){
　　var aLink = document.createElement('a');
// 　　var blob = new Blob([content]);
　　var blob = new Blob(['blob:' + content]);

　　var evt = document.createEvent("HTMLEvents");
　　evt.initEvent("click");
　　aLink.download = fileName;
　　aLink.href = URL.createObjectURL(blob);
　　aLink.dispatchEvent(evt);
　　}


http://www.zuidaima.com/question/2232374618098688.htm
浏览器对服务端响应Content-Type的处理方式不同：


 	文件类型	Content-Type 类型
常见类型	文本	text/plain
二进制流	application/octet-stream
RAR 压缩包	application/x-rar-compressed
Zip 压缩包	application/zip
Flash 文件	application/x-shockwave-flash
QuickTime 视频	video/quicktime
MP4 视频	video/mp4
MP3 音频	audio/mpeg
JPEG 图片	image/jpeg
GIF 图片	image/gif
PNG 图片	image/png
书写有误类型	数据	application
音频	audio
视频	video
图像	image
浏览器不可识别类型	自定义类型	helloworld


blob:http://v.youku.com/5902bda2-3574-4b21-8cdd-48faeec127ce' 


GET /youku/6973D3904CF4871C7F68637E3/03000801005A45CE38EF67003E88032F7AAA29-5992-15E7-79C7-9304C73552DD.mp4?sid=051514141910611062758_00_A567a0521b727e309813ea41f4b5a9975&sign=243ad8cac3690d179fcc44d6b45c11b2&ctype=50 HTTP/1.1
Host: vali.cp31.ott.cibntv.net
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Accept-Encoding: identity;q=1, *;q=0
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36
Accept: */*
Referer: http://v.youku.com/v_show/id_XMjgxMTU4ODEyNA==.html?spm=a2hzp.8253869.0.0
Accept-Language: zh-CN,zh;q=0.8
Range: bytes=0-

http://27.221.83.84/youku/69748D26FCF4C842B910504A2F/03000802015938C6364C9043384AA7AA76A81D-869B-EDBB-6DA9-A8446AE2E635.mp4?sid=051514348532212fd6438&ctype=12&ccode=0502&duration=430&expire=18000&psid=466f4cb9c10f7e149f4cc266d3d3cda3&ups_client_netip=3d989691&ups_ts=1515143485&ups_userid=&utid=lR%2FFEfH1ECsCAYzP5wVbFFVc&vkey=Afa6149d74cda1394a9f93bf5b376dee8&vid=XMjgxMTU4ODEyNA%3D%3D

http://k.youku.com/player/getFlvPath/sid/051514348532212fd6438/st/mp4/fileid/03000802015938C6364C9043384AA7AA76A81D-869B-EDBB-6DA9-A8446AE2E635?k=90bdaf612881a920282cf440&hd=1&myp=0&ts=431&ctype=12&ev=1&token=0514&oip=1033410193&ep=cieVH0iJVcoI4CDdij8bMXjkcHQHXP4J9h%2BFidJgALohQeu36jjSwZnDR%2F9GFfoRdlN3F5qArNaW%0AYkFgYfhFoBoQqjraS%2FrmioHq5dxbwJQGF2w0B8vUsVSeRjH1&ccode=0502&duration=430&expire=18000&psid=466f4cb9c10f7e149f4cc266d3d3cda3&ups_client_netip=3d989691&ups_ts=1515143485&ups_userid=&utid=lR%2FFEfH1ECsCAYzP5wVbFFVc&vid=XMjgxMTU4ODEyNA%3D%3D&vkey=Afa6149d74cda1394a9f93bf5b376dee8

GET /youku/69748D269ED30829D0221D4FFC/03000802015938C6364C9043384AA7AA76A81D-869B-EDBB-6DA9-A8446AE2E635.mp4?sid=051514348532212fd6438&ctype=12&ccode=0502&duration=430&expire=18000&psid=466f4cb9c10f7e149f4cc266d3d3cda3&ups_client_netip=3d989691&ups_ts=1515143485&ups_userid=&utid=lR%2FFEfH1ECsCAYzP5wVbFFVc&vkey=Afa6149d74cda1394a9f93bf5b376dee8&vid=XMjgxMTU4ODEyNA%3D%3D HTTP/1.1
Host: 27.221.83.84
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Accept-Encoding: identity;q=1, *;q=0
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36
Accept: */*
Referer: http://v.youku.com/v_show/id_XMjgxMTU4ODEyNA==.html?spm=a2hzp.8253869.0.0
Accept-Language: zh-CN,zh;q=0.8
Range: bytes=0-


    function loadsavesomets(urls,filenames,callback) {

        var dirPath = dir+'/';
        var filename = '';
        var i=0
        var url = '';
        
        function loadsaveonets() {
            if (i>=urls.length) {
                return false
            }
            console.log('开始下载第' + i + '个视频');
            
            url = urls[i];
            filename = filenames[i]+'.ts';
            var timer
            var writeStream
            var req

            //开始计时
            timer = setTimeout(function() {
                console.log('第' + i + '个视频下载超时，重新开始下载')
                req.abort()
                writeStream.end()
                
                loadsaveonets()
            }, 2*60*1000);

            if (i>=urls.length) {
                return false
            }else{

                writeStream = fs.createWriteStream(dirPath + filename);

                req = superagent.get(url)
                req.pipe(writeStream);

                writeStream.on('close', function() {
                    console.log('第' + i + '个视频下载完成')
                    //清除计时
                    clearTimeout(timer)
                    i++
                    if (i==urls.length) {
                        console.log('所有ts下载完成')
                        
                        return false
                    }else if (i>urls.length) {
                        return false
                    }else{
                        
                        loadsaveonets()
                    }
                })
            }
        }

        loadsaveonets()
    }





