import request from '@/utils/request'

export default {
  //分页讲师查询的方法
  getBlogList(page, limit) {
    return request({
      url: `/eduservice/blog/listBlog/${page}/${limit}`,
      method: 'get'
    })
  },
  //讲师详情的方法
  getBlogInfo(id) {
     return request({
       url: `/eduservice/blog/getBlog/${id}`,
       method: 'get'
     })
   },
   saveBlogInfo(blogInfo){
     return request({// 封装axios
       url: `/eduservice/blog`,
       method: 'post',
       data: blogInfo
     })
   }
}
