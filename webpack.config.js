
module.exports =  {

	entry:{
		index:'./index.es6'
	},
	output:{
		path:'./assets/js/',
		filename:'[name].js'
	},
	devServer:{
		inline:true,
		hot:true,
		port:3000
	},
	module:{
		loaders:[
			{
				test:/.\es6$/,
				exclude:/node_modules/, 
				loader:'babel'
			},
			{
				test:/\.png|\.jpg/,
				loaders:['url-loader?limit=30720']
			}
		]
	}

};