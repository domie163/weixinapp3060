const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmfg8el/",
            name: "ssmfg8el",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmfg8el/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生活动管理系统小程序"
        } 
    }
}
export default base
