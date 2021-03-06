/**
 * Created by hf on 2017/2/20.
 * 模拟数据源
 */
var data={
    //商品
    product:{
        id:"",
        cnName:"",
        enName:"",
        price:"",
        count:"",
        img:""
    },
    //商品列表
    list:[product,product,product,product],
    //购物车
    car:{
        id:'',
        products:[],
        date:'',
        total:''
    },
    //用户
    user:{
        id:"",
        name:"",
        password:"",
        status:""
    },
    //以购商品历史纪录
    productsList:{
        id:"",
        total:"",
        products:[],
        status:"",
        date:''
    },
    //地址栏
    address:[{
        id:"",
        '省':"",
        '市/区':"",
        '街道':"",
        detail:"",
        '经纬':""
    }],
    //支付列表
    priceList:[{
        id:"",
        name:"",
        code:""
    }],
    //物流
    logistics:{
        id:"",
        status:"",
        message:"",
        productId:"",
        price:""
    },
    //支付
    price:{
        id:"",
        status:"",
        message:"",
        productId:"",
        num:"",
        type:[
            {
                name:"",
                code:""
            },
            {
                name:"",
                code:""
            }
        ]
    }
};