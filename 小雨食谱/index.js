Holder.addTheme('thumb', {
    bg: '#55595c',
    fg: '#eceeef',
    text: 'Thumbnail'
});
// console.log(recipes_description)
// console.log(recipes_images)
// console.log(recipes_ingredients)
// console.log(recipes_spices)
// console.log(data_menu)

var recipes = [];
var TIMETABLE = {
    breakfast: '8:00',
    snack1: '10:00',
    lunch: '12:00',
    snack2: '15:00',
    dinner: '18:00'
}
_.each(recipes_description, function(description, k1){
    if(k1 !== 0) {
        var tmp = {
            id: parseInt(description[0]),
            title: description[1],
            description: description[2],
            images: [],
            ingredients: [],
            spices: []
        };
        _.chain(recipes_images).filter(function(image){
            return image[0] == tmp.id
        }).map(function(image){
            tmp['images'].push({
                title: image[2],
                pic: './images/' + image[1],
                desc: image[3]
            })
        })
        
        tmp['ingredients'] = _.filter(recipes_ingredients, function(ingredient){
            return ingredient[0] == tmp.id
        })
        tmp['spices'] = _.filter(recipes_spices, function(spice){
            return spice[0] == tmp.id
        })
        recipes.push(tmp)
    }
})

/* 假数据 START */
// recipes = [{"id":0,"title":"虾仁鸡蛋羹","description":"鸡蛋羹里有虾仁，彩椒粒，放1/32tips的盐，蒸熟后打散就行了，盐的话，我是用食用海盐炒制后+加碘盐，一起打碎的盐（其实现在想想也没这个必要，普通盐就行），海盐和海鲜是绝配，特别鲜。","images":[{"title":"","pic":"./images/1.jpg","desc":""},{"title":"","pic":"./images/2.jpg","desc":""}],"ingredients":[["0.0","虾仁","5.0","个"],["0.0","彩椒粒","10.0","g"],["0.0","鸡蛋","1.0","个"]],"spices":[["0.0","食用海盐","1/32","tips"]]},{"id":1,"title":"蔬菜米团子","description":"米团子，熟米饭一份，土豆和芹菜切粒，蒸熟，加入海苔碎，芝麻拌匀，再加入婴儿奶酪，拌匀后揉成小团子就行了。注意，加奶酪的食物就不要加盐了，不然太咸了。","images":[{"title":"","pic":"./images/3.jpg","desc":""}],"ingredients":[["1.0","熟米饭","1.0","份"],["1.0","土豆","10.0","g"],["1.0","芹菜","1.0","份"]],"spices":[["1.0","芝麻","",""],["1.0","海苔碎","",""],["1.0","婴儿奶酪","",""]]},{"id":2,"title":"猕猴桃+梨酸奶饮","description":"后面那个瓶子里是20的饮品，这次是猕猴桃，梨，酸奶饮。","images":[{"title":"","pic":"./images/1.jpg","desc":""}],"ingredients":[["2.0","猕猴桃","1.0","个"],["2.0","梨","1.0","个"],["2.0","酸奶","1.0","份"]],"spices":[]},{"id":3,"title":"鸡蛋卷","description":"鸡蛋卷就是鸡蛋打碎，平底锅放一点油，煎成饼，然后卷起来，切段。","images":[{"title":"","pic":"./images/4.jpg","desc":""}],"ingredients":[["3.0","鸡蛋","1.0","个"]],"spices":[["3.0","油","",""]]},{"id":4,"title":"面包片","description":"面包片就是在平底锅里煎一下即可。","images":[{"title":"","pic":"./images/4.jpg","desc":""},{"title":"","pic":"./images/5.jpg","desc":""}],"ingredients":[["4.0","面包片","1.0","份"]],"spices":[["4.0","油","",""]]},{"id":5,"title":"梨","description":"梨切块。","images":[{"title":"","pic":"./images/4.jpg","desc":""}],"ingredients":[["5.0","梨","1.0","个"]],"spices":[]},{"id":6,"title":"香蕉酸奶水果饮","description":"酸奶饮里是酸奶，香蕉。","images":[{"title":"","pic":"./images/4.jpg","desc":""}],"ingredients":[["6.0","香蕉","1.0","个"],["6.0","酸奶","1.0","份"]],"spices":[]},{"id":7,"title":"3米粥","description":"粥里是高粱米，糙米和黑米","images":[{"title":"","pic":"./images/5.jpg","desc":""}],"ingredients":[["7.0","高粱米","10.0","g"],["7.0","糙米","10.0","g"],["7.0","黑米","10.0","g"]],"spices":[]},{"id":8,"title":"黄瓜","description":"","images":[{"title":"","pic":"./images/21.jpg","desc":""}],"ingredients":[["8.0","黄瓜","1.0","根"]],"spices":[]},{"id":9,"title":"火龙果","description":"","images":[{"title":"","pic":"./images/5.jpg","desc":""},{"title":"","pic":"./images/5.jpg","desc":""}],"ingredients":[["9.0","火龙果","1.0","个"]],"spices":[]},{"id":10,"title":"麦片软饼","description":"","images":[{"title":"","pic":"./images/6.jpg","desc":""},{"title":"","pic":"./images/7.jpg","desc":"土豆，山药，莴笋都去皮处理好。"},{"title":"","pic":"./images/8.jpg","desc":"切成片，蒸熟，我用的微波蒸笼。"},{"title":"","pic":"./images/9.jpg","desc":"捣碎"},{"title":"","pic":"./images/10.jpg","desc":"喜宝1~3岁的早餐麦片，用7种谷物的，这个没有甜味，可以自行搭配味道。"},{"title":"","pic":"./images/11.jpg","desc":"加入适量麦片，这个麦片里含米粉成分的，冲了就是一碗米粉麦片粥，所以不用再加面粉之类，如果用的是纯麦片，需要加点面粉，要不然饼不能粘在一起。"},{"title":"","pic":"./images/12.jpg","desc":"加适量水搅拌均匀"},{"title":"","pic":"./images/13.jpg","desc":"加盐，1/32tips"},{"title":"","pic":"./images/14.jpg","desc":"加入菜椒粒"},{"title":"","pic":"./images/15.jpg","desc":"锅里加少量油，烧热后倒入米糊。"},{"title":"","pic":"./images/16.jpg","desc":"煎至2面金黄即可，出锅摊开晾一会，切块。"}],"ingredients":[["10.0","土豆","1.0","个"],["10.0","山药","1.0","根"],["10.0","莴笋","1.0","个"],["10.0","喜宝1~3岁的早餐麦片","1.0","份"],["10.0","菜椒粒","1.0","份"]],"spices":[["10.0","油","",""]]},{"id":11,"title":"牛奶鸡蛋","description":"","images":[{"title":"","pic":"./images/6.jpg","desc":""},{"title":"","pic":"./images/17.jpg","desc":"鸡蛋一只，婴儿奶粉1勺，加入与鸡蛋同等量的水"},{"title":"","pic":"./images/18.jpg","desc":"均匀搅拌，直奶和鸡蛋完全融合，我用的是奶粉搅拌器，哈哈"},{"title":"","pic":"./images/19.jpg","desc":"锅里放少量油，油热后炒至鸡蛋凝结即可。为了拍照我的鸡蛋都老了"}],"ingredients":[["11.0","鸡蛋","1.0","个"],["11.0","婴儿奶粉","1.0","勺"]],"spices":[["11.0","油","",""]]},{"id":12,"title":"西红柿","description":"西红柿削成薄片，摆成花型即可。","images":[{"title":"","pic":"./images/20.jpg","desc":""}],"ingredients":[["12.0","西红柿","1.0","个"]],"spices":[]},{"id":13,"title":"玉米茬粥","description":"玉米茬粥就是熬啊熬。。就好了。","images":[{"title":"","pic":"./images/20.jpg","desc":""}],"ingredients":[["13.0","玉米茬","1.0","份"]],"spices":[]},{"id":14,"title":"土豆蔬菜软饼","description":"","images":[{"title":"","pic":"./images/21.jpg","desc":""},{"title":"","pic":"./images/22.jpg","desc":"土豆擦最细的丝，白菜，洋葱，黄瓜，肉椒切末，加一个鸡蛋，绿豆面适量，水适量，和成粘稠的面糊，无油无水煎锅内，用勺挖一勺放锅里，煎到2面金黄即可。"}],"ingredients":[["14.0","土豆","1.0","个"],["14.0","白菜","1.0","个"],["14.0","黄瓜","1.0","根"],["14.0","鸡蛋","1.0","个"],["14.0","绿豆面","1.0","份"]],"spices":[]},{"id":15,"title":"白粥+喜宝西红柿牛肉意面","description":"","images":[{"title":"","pic":"./images/21.jpg","desc":""}],"ingredients":[["15.0","白粥","1.0","份"],["15.0","喜宝西红柿牛肉意面","1.0","份"]],"spices":[]},{"id":16,"title":"西红柿鳕鱼面","description":"","images":[{"title":"","pic":"./images/23.jpg","desc":""},{"title":"","pic":"./images/24.jpg","desc":"鳕鱼一块，去皮，检查有没有刺，切成小块。"},{"title":"","pic":"./images/24.jpg","desc":"洋葱切块。西红柿去皮，去籽，切成小块。胡萝卜(忘拍了)，去皮切成小块。以上食材不用切特别碎，一会还要打碎的。"},{"title":"","pic":"./images/24.jpg","desc":"鸡蛋一只，取蛋黄(20已经开始吃整蛋了)，卷心菜去茎，切成碎末。"},{"title":"","pic":"./images/25.jpg","desc":"锅里烧开水，放入除了鸡蛋和卷心菜以外所有的食材，煮开，撇去沫子。"},{"title":"","pic":"./images/26.jpg","desc":"全部食材煮开，撇去沫子"},{"title":"","pic":"./images/27.jpg","desc":"用料理机把锅里的东西打成蔬菜汁，打完之后有很多沫子，不用管，一会就没有了。"},{"title":"","pic":"./images/28.jpg","desc":"之前自己做好的胡萝卜面，居然拍不出红色 "},{"title":"","pic":"./images/29.jpg","desc":"加入面，煮开，煮一会，把面煮软。"},{"title":"","pic":"./images/30.jpg","desc":"加入卷心菜末。"},{"title":"","pic":"./images/31.jpg","desc":"卷心菜煮软之后，把鸡蛋打碎，转着圈倒入锅里。"},{"title":"","pic":"./images/32.jpg","desc":"鸡蛋成型就可以关火了"},{"title":"","pic":"./images/33.jpg","desc":"拿出辅食剪刀，一顿乱剪。吃的时候加点香油就行啦"}],"ingredients":[["16.0","西红柿","1.0","个"],["16.0","鳕鱼","1.0","块"],["16.0","洋葱","1.0","个"],["16.0","胡萝卜","1.0","根"],["16.0","鸡蛋","1.0","个"],["16.0","卷心菜","1.0","个"],["16.0","胡萝卜面","1.0","份"]],"spices":[["16.0","香油","",""]]},{"id":17,"title":"橘子盅蒸蛋","description":"","images":[{"title":"","pic":"./images/34.jpg","desc":"备好食材"},{"title":"","pic":"./images/35.jpg","desc":"橘子切尾部三分之一的地方"},{"title":"","pic":"./images/36.jpg","desc":"用小刀挨着橘子边缘切一圈"},{"title":"","pic":"./images/37.jpg","desc":"用勺子挖到碗里。用勺子压出果汁"},{"title":"","pic":"./images/38.jpg","desc":"鸡蛋打撒.把打散的鸡蛋倒入果汁中搅拌均匀"},{"title":"","pic":"./images/39.jpg","desc":"在到入橘子盅里7分满上锅大火蒸15分钟"},{"title":"","pic":"./images/40.jpg","desc":"蒸好橘子鸡蛋盅。很清香的甜品"}],"ingredients":[["17.0","橘子","1.0","个"],["17.0","鸡蛋","1.0","个"]],"spices":[]}]
/* 假数据 END */




var menu = [];
_.each(data_menu, function(m,key){
    if(key !== 0) {
        var tmp = {
            date: m[0],
            time: m[1],
            recipes:[]
        };
        tmp['recipes'] = _.rest(m,2)
        menu.push(tmp)

    }
})

/* 假数据 START */
// var menu = [{
//             date:'2017-12-23',
//             time:'breakfast',
//             recipes:['3米粥','面包片','火龙果','黄瓜']
//             },{
//                 date:'2017-12-23',
//                 time:'snack1',
//                 recipes:['奶','苹果']
//             },{
//                 date:'2017-12-23',
//                 time:'lunch',
//                 recipes:['麦片软饼','牛奶鸡蛋','西红柿','玉米茬粥']
//             },{
//                 date:'2017-12-23',
//                 time:'snack2',
//                 recipes:['奶','橘子盅蒸蛋']
//             },{
//                 date:'2017-12-23',
//                 time:'dinner',
//                 recipes:['西红柿鳕鱼面','猕猴桃']
//             }]

/* 假数据 END */


var app = new Vue({
	el: '#app',
	data: {
		menu:menu,

		recipes: recipes,
        timetable : TIMETABLE
	},
	computed: {

		menutable: function(){
			var tmp = _.groupBy(this.menu, function(item){ return item.date; })
			
			var res = {};
			var self = this;
			_.each(tmp, function(v,k){
                //k 就是日期
                var key = moment(k).format("YYYY-MM-DD ddd")
				res[key] = {};
				
				_.each(v,function(v1,k1){
					var tmp2 = [];
					res[key][v1.time] = v1;
					_.each(v1.recipes,function(v2,k2){
						var tmp3 = _.find(self.recipes, function(item){ return item.title == v2})
						tmp2.push({
							title:v2,
							id: tmp3 && tmp3.id,
							ingredients: tmp3 && tmp3.ingredients,
							spices: tmp3 && tmp3.spices
						})
						
					})
					res[key][v1.time]['recipes'] = tmp2;

				})
			})
            // res = {
            //     "24-Dec-17":{
            //         "breakfast":{
            //             "date":"24-Dec-17",
            //             "time":"breakfast",
            //             "recipes":[
            //                 {
            //                     "title":"3米粥",
            //                     "id":8,
            //                     "ingredients":[
            //                         [
            //                             "8.0",
            //                             "高粱米",
            //                             "10.0",
            //                             "g"
            //                         ],
            //                         [
            //                             "8.0",
            //                             "糙米",
            //                             "10.0",
            //                             "g"
            //                         ],
            //                         [
            //                             "8.0",
            //                             "黑米",
            //                             "10.0",
            //                             "g"
            //                         ]
            //                     ],
            //                     "spices":[

            //                     ]
            //                 },
            //                 {
            //                     "title":"面包片",
            //                     "id":5,
            //                     "ingredients":[
            //                         [
            //                             "5.0",
            //                             "面包片",
            //                             "1.0",
            //                             "份"
            //                         ]
            //                     ],
            //                     "spices":[
            //                         [
            //                             "5.0",
            //                             "油",
            //                             "",
            //                             ""
            //                         ]
            //                     ]
            //                 },
            //                 {
            //                     "title":""
            //                 }
            //             ]
            //         },
            //         "snack1":{
            //             "date":"24-Dec-17",
            //             "time":"snack1",
            //             "recipes":[
            //                 {
            //                     "title":"配方奶",
            //                     "id":23,
            //                     "ingredients":[

            //                     ],
            //                     "spices":[

            //                     ]
            //                 },
            //                 {
            //                     "title":""
            //                 },
            //                 {
            //                     "title":""
            //                 }
            //             ]
            //         },
            //         "lunch":{
            //             "date":"24-Dec-17",
            //             "time":"lunch",
            //             "recipes":[
            //                 {
            //                     "title":"小馄饨"
            //                 },
            //                 {
            //                     "title":"土豆鳕鱼饼",
            //                     "id":21,
            //                     "ingredients":[
            //                         [
            //                             "21.0",
            //                             "鳕鱼",
            //                             "25.0",
            //                             "g"
            //                         ],
            //                         [
            //                             "21.0",
            //                             "胡萝卜",
            //                             "25.0",
            //                             "g"
            //                         ],
            //                         [
            //                             "21.0",
            //                             "土豆",
            //                             "100.0",
            //                             "g"
            //                         ]
            //                     ],
            //                     "spices":[

            //                     ]
            //                 },
            //                 {
            //                     "title":""
            //                 }
            //             ]
            //         },
            //         "snack2":{
            //             "date":"24-Dec-17",
            //             "time":"snack2",
            //             "recipes":[
            //                 {
            //                     "title":"配方奶",
            //                     "id":23,
            //                     "ingredients":[

            //                     ],
            //                     "spices":[

            //                     ]
            //                 },
            //                 {
            //                     "title":"面包片",
            //                     "id":5,
            //                     "ingredients":[
            //                         [
            //                             "5.0",
            //                             "面包片",
            //                             "1.0",
            //                             "份"
            //                         ]
            //                     ],
            //                     "spices":[
            //                         [
            //                             "5.0",
            //                             "油",
            //                             "",
            //                             ""
            //                         ]
            //                     ]
            //                 },
            //                 {
            //                     "title":""
            //                 }
            //             ]
            //         },
            //         "dinner":{
            //             "date":"24-Dec-17",
            //             "time":"dinner",
            //             "recipes":[
            //                 {
            //                     "title":"手抓软米饭",
            //                     "id":28,
            //                     "ingredients":[
            //                         [
            //                             "28.0",
            //                             "大米",
            //                             "50.0",
            //                             "g"
            //                         ]
            //                     ],
            //                     "spices":[

            //                     ]
            //                 },
            //                 {
            //                     "title":"柳橙蒸蛋",
            //                     "id":18,
            //                     "ingredients":[
            //                         [
            //                             "18.0",
            //                             "橙子",
            //                             "2.0",
            //                             "个"
            //                         ],
            //                         [
            //                             "18.0",
            //                             "鸡蛋",
            //                             "2.0",
            //                             "个"
            //                         ]
            //                     ],
            //                     "spices":[
            //                         [
            //                             "18.0",
            //                             "白砂糖",
            //                             "10.0",
            //                             "g"
            //                         ]
            //                     ]
            //                 },
            //                 {
            //                     "title":"玉米蔬菜汤",
            //                     "id":30,
            //                     "ingredients":[
            //                         [
            //                             "30.0",
            //                             "玉米",
            //                             "1.0",
            //                             "个"
            //                         ],
            //                         [
            //                             "30.0",
            //                             "西红柿",
            //                             "1.0",
            //                             "个"
            //                         ],
            //                         [
            //                             "30.0",
            //                             "黄瓜",
            //                             "0.5",
            //                             "根"
            //                         ]
            //                     ],
            //                     "spices":[

            //                     ]
            //                 }
            //             ]
            //         }
            //     },
            //     "25-Dec-17":{
            //         "breakfast":{
            //             "date":"25-Dec-17",
            //             "time":"breakfast",
            //             "recipes":[
            //                 {
            //                     "title":"土豆鳕鱼饼",
            //                     "id":21,
            //                     "ingredients":[
            //                         [
            //                             "21.0",
            //                             "鳕鱼",
            //                             "25.0",
            //                             "g"
            //                         ],
            //                         [
            //                             "21.0",
            //                             "胡萝卜",
            //                             "25.0",
            //                             "g"
            //                         ],
            //                         [
            //                             "21.0",
            //                             "土豆",
            //                             "100.0",
            //                             "g"
            //                         ]
            //                     ],
            //                     "spices":[

            //                     ]
            //                 },
            //                 {
            //                     "title":"奶香核桃黑米糊",
            //                     "id":26,
            //                     "ingredients":[
            //                         [
            //                             "26.0",
            //                             "大米",
            //                             "20.0",
            //                             "g"
            //                         ],
            //                         [
            //                             "26.0",
            //                             "黑米",
            //                             "50.0",
            //                             "g"
            //                         ],
            //                         [
            //                             "26.0",
            //                             "核桃肉",
            //                             "1.0",
            //                             "个"
            //                         ],
            //                         [
            //                             "26.0",
            //                             "牛奶",
            //                             "适量",
            //                             ""
            //                         ]
            //                     ],
            //                     "spices":[

            //                     ]
            //                 },
            //                 {
            //                     "title":"圣女果",
            //                     "id":36,
            //                     "ingredients":[
            //                         [
            //                             "36.0",
            //                             "圣女果",
            //                             "1.0",
            //                             "个"
            //                         ]
            //                     ],
            //                     "spices":[

            //                     ]
            //                 }
            //             ]
            //         },
            //         "snack1":{
            //             "date":"25-Dec-17",
            //             "time":"snack1",
            //             "recipes":[
            //                 {
            //                     "title":"配方奶",
            //                     "id":23,
            //                     "ingredients":[

            //                     ],
            //                     "spices":[

            //                     ]
            //                 },
            //                 {
            //                     "title":""
            //                 },
            //                 {
            //                     "title":""
            //                 }
            //             ]
            //         },
            //         "lunch":{
            //             "date":"25-Dec-17",
            //             "time":"lunch",
            //             "recipes":[
            //                 {
            //                     "title":""
            //                 },
            //                 {
            //                     "title":""
            //                 },
            //                 {
            //                     "title":""
            //                 }
            //             ]
            //         },
            //         "snack2":{
            //             "date":"25-Dec-17",
            //             "time":"snack2",
            //             "recipes":[
            //                 {
            //                     "title":"配方奶",
            //                     "id":23,
            //                     "ingredients":[

            //                     ],
            //                     "spices":[

            //                     ]
            //                 },
            //                 {
            //                     "title":"苹果",
            //                     "id":19,
            //                     "ingredients":[
            //                         [
            //                             "19.0",
            //                             "苹果",
            //                             "1.0",
            //                             "个"
            //                         ]
            //                     ],
            //                     "spices":[

            //                     ]
            //                 },
            //                 {
            //                     "title":""
            //                 }
            //             ]
            //         },
            //         "dinner":{
            //             "date":"25-Dec-17",
            //             "time":"dinner",
            //             "recipes":[
            //                 {
            //                     "title":""
            //                 },
            //                 {
            //                     "title":""
            //                 },
            //                 {
            //                     "title":""
            //                 }
            //             ]
            //         }
            //     }
            // }
			return res
		},
		ingredients: function () {
			var self = this;
			var res = [];
            var nowDate = moment().format('YYYY-MM-DD');
            var ingredients_table = _.omit(self.menutable, function(value, key, object) {
                console.log(key)
                console.log(nowDate)
                var res = moment(key.split(' ')[0]).isSameOrBefore(moment());
                console.log(res)

              return res
            });
            console.log(ingredients_table)
            if(_.has(self.menutable, nowDate)) {
                var omitTimeItem = [];
                var nowDateMenu = _.pick(self.menutable, nowDate)[nowDate];
                _.each(nowDateMenu, function(timeitem, k) {
                    var nowTime = moment().format('YYYY-MM-DD k:mm');
                    var time = moment().year() + '-' + (moment().month()+1) + '-' + moment().date() + ' ' + TIMETABLE[k];
                    if(moment(time).isBefore(nowTime)) {
                        omitTimeItem.push(k)
                    }
                })
                ingredients_table = _.extend(ingredients_table,_.omit(nowDateMenu, omitTimeItem))

            }

			_.each(ingredients_table, function(dateitem, k){
				_.each(dateitem, function(timeitem,k1){

					_.each(timeitem['recipes'], function(recipe, k2){
						_.each(recipe['ingredients'],function(ingredient,k3){
							var tmp = {};
							tmp['recipe'] = recipe.title
							tmp['name'] = ingredient[1]
							tmp['amount'] = ingredient[2]
							tmp['unit'] = ingredient[3]
							res.push(tmp)

						})
					})
				})
			})
			var res2 = [];
			var checked = [];
			_.each(res, function(ingredient, k){
				if(checked.indexOf(ingredient.name) == -1) {
					var tmp = {};
					var group = _.where(res, {'name': ingredient.name})
					
					tmp['name'] = ingredient.name
					tmp['amount'] = 0;
                    var flag = []; //ingredient中已记录的recipe id
					_.each(group, function(sameIngredient, k1) {
						if(typeof tmp['recipe'] == 'undefined') {
							tmp['recipe'] = [];
                            
						}

						//找到recipe的id
						var tmp3 = _.find(self.recipes, function(item){ return item.title == sameIngredient.recipe})
                        
                        //如果该ingeident中还未记录过这条recipe，则追加
                        if(flag.indexOf(tmp3.id) == -1) {
                            tmp['recipe'].push([sameIngredient.recipe, tmp3.id])
                            flag.push(tmp3.id)
                        }
                        
						

						//todo 单位一致
						tmp['amount'] += parseInt(sameIngredient.amount);
						tmp['unit'] = sameIngredient.unit;
						
					})
					res2.push(tmp)
					checked.push(ingredient.name);
				}
				

			})

			

			return res2
		},
		spices: function () {
			var self = this;
			var res = [];
			_.each(self.menutable, function(dateitem, k){
				_.each(dateitem, function(timeitem,k1){

					_.each(timeitem['recipes'], function(recipe, k2){
						_.each(recipe['spices'],function(spice,k3){
							res.push(spice)
						})
					})
				})
			})
			return res
		}
	},
	methods: {
		fn_amortizated: function(sum, months){
			var x = [];
			var count = 0;
			for(var i = 0; i < this.simulatePeriod; i ++) {
				count < months ? x.push((sum/months).toFixed(0)) : x.push(0);
				count++;
			}
			return x;
		}
	}
});