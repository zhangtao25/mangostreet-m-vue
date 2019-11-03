const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock(
  '/test',
  'get',
  {
    "result": "success",
    "data": {
      "userSn": "3785521",
      "username": "不求甚解",
      "age": 25,
      "imgUrl": "https://avatar.csdn.net/8/5/D/3_bocongbo.jpg"
    },
    "msg": ""
  }
);

Mock.mock(
  /login/,
  'post',
  {
    username: 'zhangtao25',
    age: '12',
    token: '35435434asfkajshkjgjhghgjhgjhgjghj'
  }
);

Mock.mock(
  /note/,
  'get',
  [
    {
      id:'5d553c170000000028029f7a',
      title:'美少女都该拥有的18支口红💥你集齐了吗❓',
      type:'normal',
      desc:'',
      likes:'2559',
      cover:'http://ci.xiaohongshu.com/cc2f5b8a-3be0-5e2e-8070-000ec44b097a',
      user_id:'59998ab850c4b43c3da4fc0e',
      user_account:'18158899797',
      user_nickname:'张温柔',
      noteId:'5d553c170000000028029f7a',
      collects:'500',
      images:'',
      user_img:'',
    },
    {
      id:'5d5554f00000000028035bf2',
      title:'被追的反而更痴情',
      type:'normal',
      desc:'',
      likes:'2559',
      cover:'http://ci.xiaohongshu.com/00fb6926-34c7-5c92-a9ca-b8f48964b387',
      user_id:'59998ab850c4b43c3da4fc0e',
      user_account:'18158899797',
      user_nickname:'张温柔',
      noteId:'5d553c170000000028029f7a',
      collects:'500',
      images:'',
      user_img:'',
    },
    {
      id:'5d57eefc000000000201f223',
      title:'非常日常的大地色眼妆[哇R] 小仙女们快来码住[飞吻R]',
      type:'normal',
      desc:'',
      likes:'2559',
      cover:'http://ci.xiaohongshu.com/6bd25fda-a577-5c2a-8e26-2d3e5c727557',
      user_id:'59998ab850c4b43c3da4fc0e',
      user_account:'18158899797',
      user_nickname:'张温柔',
      noteId:'5d553c170000000028029f7a',
      collects:'500',
      images:'',
      user_img:'',
    },
    {
      id:'5d5d1323000000000201ae88',
      title:'吃一口就上瘾‼️香辣啤酒卤蛋🔥无敌开胃下饭',
      type:'normal',
      desc:'',
      likes:'2559',
      cover:'http://ci.xiaohongshu.com/cb3352bc-6692-5d73-9949-8272938fbfee',
      user_id:'59998ab850c4b43c3da4fc0e',
      user_account:'18158899797',
      user_nickname:'张温柔',
      noteId:'5d553c170000000028029f7a',
      collects:'500',
      images:'',
      user_img:'',
    },
    {
      id:'5d5a735b000000000201f6c0',
      title:'烟熏紫玫瑰🥀🥀紫色酷起来红色就靠边站了！',
      type:'normal',
      desc:'',
      likes:'2559',
      cover:'http://ci.xiaohongshu.com/61803230-9087-5b9f-9acf-5a2c5534b8ed',
      user_id:'59998ab850c4b43c3da4fc0e',
      user_account:'18158899797',
      user_nickname:'张温柔',
      noteId:'5d553c170000000028029f7a',
      collects:'500',
      images:'',
      user_img:'',
    },
    {
      id:'5d5d1323000000000201ae88',
      title:'吃一口就上瘾‼️香辣啤酒卤蛋🔥无敌开胃下饭',
      type:'normal',
      desc:'',
      likes:'2559',
      cover:'http://ci.xiaohongshu.com/cb3352bc-6692-5d73-9949-8272938fbfee',
      user_id:'59998ab850c4b43c3da4fc0e',
      user_account:'18158899797',
      user_nickname:'张温柔',
      noteId:'5d553c170000000028029f7a',
      collects:'500',
      images:'',
      user_img:'',
    },
    {
      id:'5d57eefc000000000201f223',
      title:'非常日常的大地色眼妆[哇R] 小仙女们快来码住[飞吻R]',
      type:'normal',
      desc:'',
      likes:'2559',
      cover:'http://ci.xiaohongshu.com/6bd25fda-a577-5c2a-8e26-2d3e5c727557',
      user_id:'59998ab850c4b43c3da4fc0e',
      user_account:'18158899797',
      user_nickname:'张温柔',
      noteId:'5d553c170000000028029f7a',
      collects:'500',
      images:'',
      user_img:'',
    },
  ]
);

