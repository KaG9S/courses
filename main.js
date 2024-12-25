class headers{
    constructor(id, inner = null, innerWhenOn = null, on = false){
        this.id = id
        this.inner = inner
        this.innerWhenOn = innerWhenOn
        this.on = on
    }
    show(){
        document.getElementById(this.id).innerHTML = this.innerWhenOn
    }
    hide(){
        document.getElementById(this.id).innerHTML = null
    }
}

function courses() {
    inner = '<a href="courses/HTML/index.html">HTML</a>'
    inner += '<a href="courses/CSS/index.html">CSS</a>'
    inner += '<a href="courses/JavaScript/index.html">JavaScript</a>'
    inner += '<a href="courses/Web/index.html">Web</a>'
    document.getElementById('courses').innerHTML = inner
}