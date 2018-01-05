var request = require("request");
var iconv = require('iconv-lite');
var Promise = require("bluebird");
var fs = require('fs');
var path = require('path');

// http://i.youku.com/i/UNDUxMTA1MDM5Ng==/videos?q=艺术
var seriesFolder = '36堂艺术课程';
var lessons = {
    '力豆艺术课程-中班12-老爷爷的皱纹': "http://pl-ali.youku.com/playlist/m3u8?vid=XMzE4NzU1OTkwMA%3D%3D&type=flv&ups_client_netip=65554579&ups_ts=1515167260&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=262c7d902da16805db78937a2cf299a1&password=panasia&duration=1847&expire=18000&ups_key=847ea2293f40b19b55ab19f26e8a0828",
    '力豆艺术课程-大班艺术12-水果的聚会': "http://pl-ali.youku.com/playlist/m3u8?vid=XMzE4NzU2MTAxNg%3D%3D&type=flv&ups_client_netip=65554579&ups_ts=1515168679&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=2f5aa96c846f1389cd65ccf90d9e27b4&password=panasia&duration=1661&expire=18000&ups_key=10c3e8e844a869c83ee7972453b16c31",
    '力豆艺术课程-大班艺术11-大方块小方块':"http://pl-ali.youku.com/playlist/m3u8?vid=XMzE4NzU1NzA0MA%3D%3D&type=flv&ups_client_netip=65554579&ups_ts=1515168693&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=c5221138715fb4f947924bd41397e998&password=panasia&duration=1663&expire=18000&ups_key=38d3e653be87de5667d53588448ddd67",
    '力豆艺术课程-中班11-妈妈的大肚子':"http://pl-ali.youku.com/playlist/m3u8?vid=XMzE4NzU1NTM4MA%3D%3D&type=flv&ups_client_netip=65554579&ups_ts=1515168708&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=a754622961e4afe03131cdd1e79f25e1&password=panasia&duration=1633&expire=18000&ups_key=8158d13885291839b49048a0be4c950e",
    '力豆艺术课程-小班11-小小生活艺术家':"http://pl-ali.youku.com/playlist/m3u8?vid=XMzE4NzU1Mjc5Mg%3D%3D&type=flv&ups_client_netip=65554579&ups_ts=1515168723&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=4bba9590a00fcfc3325ad31b602b06a4&password=panasia&duration=2020&expire=18000&ups_key=a2af7e8629a882adf64d8435b9ce2a13",
    '力豆艺术课程-大班艺术9-我把虫虫变大了':"http://pl-ali.youku.com/playlist/m3u8?vid=XMzEyNjA3MDU4MA%3D%3D&type=flv&ups_client_netip=65554579&ups_ts=1515168827&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=4bbcced8cb7c30cc34e9f90708703652&password=panasia&duration=2116&expire=18000&ups_key=98d26c7a8b3f27acbbac937220a976bd",
    '力豆艺术课程-大班艺术10-缤纷大城市':"http://pl-ali.youku.com/playlist/m3u8?vid=XMzEyNjA3NDU5Mg%3D%3D&type=flv&ups_client_netip=65554579&ups_ts=1515168836&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=ed537fa1577ea126985f296994224d33&password=panasia&duration=1912&expire=18000&ups_key=0e8b802821c77333e37fafe8ca4fe7d1",
    '力豆艺术课程-小班10-萤火虫':"http://pl-ali.youku.com/playlist/m3u8?vid=XMzEyNjA3MjE5Ng%3D%3D&type=flv&ups_client_netip=65554579&ups_ts=1515168848&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=54e9c2784885a327a955dfde2ff091b6&password=panasia&duration=1637&expire=18000&ups_key=c152a029305ea9e8538d5c2065fdb3a3",
    //以下超清
    '力豆艺术课程-小班12-小手仙人掌':"http://pl-ali.youku.com/playlist/m3u8?vid=XMzE4NzU1ODYzNg%3D%3D&type=hd2&ups_client_netip=65554579&ups_ts=1515171382&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=f7997941127845516dc2a5b9cfa12222&ups_userid=768492846&ups_ytid=768492846&password=panasia&duration=1579&expire=18000&ups_key=b1c573da74ecca8e75f060f03a95e423",
    '力豆艺术课程-中班10-珊瑚与小丑鱼':"http://pl-ali.youku.com/playlist/m3u8?vid=XMzEyNjA3MzQ2NA%3D%3D&type=hd2&ups_client_netip=65554579&ups_ts=1515170075&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=18eded6fce9faddaafe38ffff3126cd9&password=panasia&duration=1515&expire=18000&ups_key=859ba47875523c074ac72156ab97a8e1",
    '力豆艺术课程-中班9-蝴蝶的衣裳':"http://pl-ali.youku.com/playlist/m3u8?vid=XMzEyNjA2OTYwMA%3D%3D&type=hd2&ups_client_netip=65554579&ups_ts=1515170265&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=250ac8025ac1c7a2b2cc21ae18dc2186&password=panasia&duration=1608&expire=18000&ups_key=e0093e55362b0307c44d6bf89fd3f9f0",
    '力豆艺术课程-小班9-蚂蚁勤做工': "http://pl-ali.youku.com/playlist/m3u8?vid=XMzEyNjA2ODM4NA%3D%3D&type=hd2&ups_client_netip=65554579&ups_ts=1515171294&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=47ab55993d772d15898ef6447bc0e372&ups_userid=768492846&ups_ytid=768492846&password=panasia&duration=1767&expire=18000&ups_key=f5f405a445e2653012f35478467551d6",
    'LTA力豆藝術課程-小班1-誰的大圓臉': "http://pl-ali.youku.com/playlist/m3u8?vid=XMjczMjExNjk5Mg%3D%3D&type=hd2&ups_client_netip=65554579&ups_ts=1515173283&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=e749880096cf88cad25c9a0509fa6cc0&ups_userid=768492846&ups_ytid=768492846&password=panasia&duration=940&expire=18000&ups_key=04f6e0906adab9cd2966f1e0aaaff274",
    '力豆艺术课程 - 小班2-好饿的毛毛虫': "http://pl-ali.youku.com/playlist/m3u8?vid=XMjc4NjExOTkyNA%3D%3D&type=hd2&ups_client_netip=65554579&ups_ts=1515174119&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=8df8018f1147d95e2b1870d683d132df&ups_userid=768492846&ups_ytid=768492846&password=panasia&duration=1730&expire=18000&ups_key=242f0ef01f27f71a4b2f51472404eb9b",
    '力豆艺术课程-小班3-小小厨师':"http://pl-ali.youku.com/playlist/m3u8?vid=XMjg3NDc2NTgwNA%3D%3D&type=hd2&ups_client_netip=65554579&ups_ts=1515175110&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=29ff5fd73e1fc0dba6622449ef637a04&ups_userid=768492846&ups_ytid=768492846&password=panasia&duration=1185&expire=18000&ups_key=4a93c2ecf79d5e8ba5f8327409e65262",
    '力豆艺术课程-小班4_冷冷国与暖暖国':"http://pl-ali.youku.com/playlist/m3u8?vid=XMjkyMDYzMTc5Mg%3D%3D&type=hd2&ups_client_netip=65554579&ups_ts=1515175500&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=51e9b18c2d7b7c63fb716d5c213635a3&ups_userid=768492846&ups_ytid=768492846&password=panasia&duration=1671&expire=18000&ups_key=43df3c355ea9864fd0d3e68cce2d5db2",
    '力豆艺术课程-小班5-下雨了':"http://pl-ali.youku.com/playlist/m3u8?vid=XMzAxMjgzOTczNg%3D%3D&type=hd2&ups_client_netip=65554579&ups_ts=1515175911&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=14e6c0a0604ef829c448ae8346e4e369&ups_userid=768492846&ups_ytid=768492846&password=panasia&duration=1445&expire=18000&ups_key=fd615d1e6624e514394fdf0e193a2021",
}
var lessonsArray = [];
var urlArray = [];
for(var p in lessons) {
    lessonsArray.push(p);
    urlArray.push(lessons[p]);
}

var lessonFolder = lessonsArray[lessonsArray.length-1];
var listUrl = urlArray[urlArray.length-1];


var counter = 0;

var videoUrlList = [];
var createFolder = function(to) { //文件写入
    // console.log(to)
    var sep = path.sep
    var folders = path.dirname(to).split(sep);
    var p = '';
    while (folders.length) {
        p += folders.shift() + sep;
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
};

    var targetOptions = {
        method: 'GET',
        // url: 'http://pl-ali.youku.com/playlist/m3u8?vid=XMjc5OTE4Mjc2NA%3D%3D&type=mp4&ups_client_netip=65554579&ups_ts=1515164995&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=d6ae470fb2cc8e9240a364a4c28c6184&password=panasia&duration=1370&expire=18000&ups_key=0bc9f5ea59503a2064cb50cba2830c8f',
        // url: "http://pl-ali.youku.com/playlist/m3u8?vid=XMzE4NzU1OTkwMA%3D%3D&type=flv&ups_client_netip=65554579&ups_ts=1515167260&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&ccode=0502&psid=262c7d902da16805db78937a2cf299a1&password=panasia&duration=1847&expire=18000&ups_key=847ea2293f40b19b55ab19f26e8a0828",
        url: listUrl,
        timeout: 8000,
        encoding: null,
    };

    request(targetOptions, function (error, response, body) {
        try {
            if (error) throw error;

            // console.log(response.statusCode);
            // console.log(response);
            body = body.toString();
            // console.log(body);

            videoUrlList = body.match(/http:\/\/.*?(ame)/g)
            videoUrlList.forEach(function(item, index){
                createFolder(`./${seriesFolder}/${lessonFolder}/${index}.mp4`);
                var reader = request(item).pipe(fs.createWriteStream(`./${seriesFolder}/${lessonFolder}/${index}.mp4`));
                // reader = request('http://58.216.103.25/67732A0CBBE3882FDF5DF06352/03000B080559F96730E53443384AA7BAE8151F-D374-556B-4382-8CA4CD73846B.mp4.ts?ccode=0502&duration=1515&expire=18000&psid=18eded6fce9faddaafe38ffff3126cd9&ups_client_netip=65554579&ups_ts=1515170075&ups_userid=&utid=XtBlDJ7kAjsCAXxPJDO3zqWf&vid=XMzEyNjA3MzQ2NA%3D%3D&vkey=Aa61332200e984f418e782dcc93cd4d22&ts_start=11.9&ts_end=23.9&ts_seg_no=87&ts_keyframe').pipe(fs.createWriteStream(`./test/test.mp4`));
                // console.log(reader)
                reader.on('finish', function(){

                    counter++;
                    var percent = parseInt(counter/videoUrlList.length*100);
                    console.log(`${index}.mp4下载完毕`)
                    console.log(`=== ${lessonFolder} 已完成 ${percent}% ===`)
                });
                // console.log('ing---')
            })

            
        } catch (e) {
            // console.error(e);
        }


    });







