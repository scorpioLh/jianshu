import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload-images.jianshu.io/upload_images/15569637-288ea29bcf1dcd2c.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '手绘',
            imgUrl: '//upload-images.jianshu.io/upload_images/15569637-288ea29bcf1dcd2c.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ],
    articleList: [
        {
            id: 1,
            imgUrl: '//upload-images.jianshu.io/upload_images/15743712-6727131e9ce9abdb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            title: '男性长期“滴酒不沾”会发生什么？别不相信，身体的变化显而易见',
            desc: '男性长期“滴酒不沾”会发生什么？别不相信，身体的变化显而易见 许多的人都很爱喝酒，我国古代也有很爱喝酒的人，比如著名诗人李白，据说他极爱喝酒，喝...'
        },
        {
            id: 2,
            imgUrl: '//upload-images.jianshu.io/upload_images/15743712-6727131e9ce9abdb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            title: '男性长期“滴酒不沾”会发生什么？别不相信，身体的变化显而易见',
            desc: '男性长期“滴酒不沾”会发生什么？别不相信，身体的变化显而易见 许多的人都很爱喝酒，我国古代也有很爱喝酒的人，比如著名诗人李白，据说他极爱喝酒，喝...'
        },
        {
            id: 3,
            imgUrl: '//upload-images.jianshu.io/upload_images/15743712-6727131e9ce9abdb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            title: '男性长期“滴酒不沾”会发生什么？别不相信，身体的变化显而易见',
            desc: '男性长期“滴酒不沾”会发生什么？别不相信，身体的变化显而易见 许多的人都很爱喝酒，我国古代也有很爱喝酒的人，比如著名诗人李白，据说他极爱喝酒，喝...'
        },
        {
            id: 4,
            imgUrl: '//upload-images.jianshu.io/upload_images/15743712-6727131e9ce9abdb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            title: '男性长期“滴酒不沾”会发生什么？别不相信，身体的变化显而易见',
            desc: '男性长期“滴酒不沾”会发生什么？别不相信，身体的变化显而易见 许多的人都很爱喝酒，我国古代也有很爱喝酒的人，比如著名诗人李白，据说他极爱喝酒，喝...'
        }
    ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    
    default:
      return state
  }
}