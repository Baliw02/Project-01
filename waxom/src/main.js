import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {Server, Model} from 'miragejs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCaretRight, faAngleRight, faCaretLeft,faCaretUp, faAngleLeft, faBars, faGripLinesVertical, faInbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


window.Vue = Vue;
var VueGesture = require('vue2-gesture')
Vue.use(VueGesture)


library.add(faUserSecret, faCaretRight, faCaretLeft, faCaretUp, faAngleRight, faAngleLeft, faBars, faGripLinesVertical, faInbox )

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Server({
  models:{
    emails: Model
  },
  routes(){
    this.get('/api/boxes', () => {
      return[
        {
          'image': [require("./assets/pencil.svg")],
          'index': 0,
          'title': 'Web & App Design',
          'content': 'Lorem Ipsum, doming id quod mazmina eleifend lorem ipsumlorem ipsumlorem ipsumlorem ipsum'
        },
        {
          'image': [require("./assets/layer.svg")],
          'index': 1,
          'title': 'Development',
          'content': 'Lorem Ipsum, doming id quod mazmina eleifendlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
        },
        {
          'image': [require("./assets/gear.svg")],
          'index': 2,
          'title': 'Customization',
          'content': 'Lorem Ipsum, doming id quod mazmina eleifendlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
        },
        {
          'image': [require("./assets/business.svg")],
          'index': 3,
          'title': 'Marketing',
          'content': 'Lorem Ipsum, doming id quod mazmina eleifendlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
        }
      ]
    },)
    this.get('/api/projects', () => {
        return[
        {
          'image': [require("./components/projectimages/photo01.jpg")],
          'index': 0,
          'category': 'photo',
          'title': 'Lorem Ipsum photo',
          'Content': 'Lorem Lorem ipsum photo'
          },
        {
          'image': [require("./components/projectimages/photo02.jpg")],
          'index': 1,
          'category': 'photo',
          'title': 'Lorem Ipsum photo',
          'Content': 'Lorem Lorem ipsum photo'
        },
        {
          'image': [require("./components/projectimages/photo03.jpg")],
          'index': 2,
          'category': 'photo',
          'title': 'Lorem Ipsum photo',
          'Content': 'Lorem Lorem ipsum photo'
        },
        {
          'image': [require("./components/projectimages/photo04.jpg")],
          'index': 3,
          'category': 'photo',
          'title': 'Lorem Ipsum photo',
          'Content': 'Lorem Lorem ipsum photo'
        },
        {
          'image': [require("./components/projectimages/photo05.jpg")],
          'index': 4,
          'category': 'photo',
          'title': 'Lorem Ipsum photo',
          'Content': 'Lorem Lorem ipsum photo'
        },
        {
          'image': [require("./components/projectimages/photo07.jpg")],
          'index': 5,
          'category': 'photo',
          'title': 'Lorem Ipsum photo',
          'Content': 'Lorem Lorem ipsum photo'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 6,
          'category': 'photo',
          'title': 'Lorem Ipsum photo',
          'Content': 'Lorem Lorem ipsum photo'
        },          
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 7,
          'category': 'photo',
          'title': 'Lorem Ipsum photo',
          'Content': 'Lorem Lorem ipsum photo'
        }, 
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 8,
          'category': 'photo',
          'title': 'Lorem Ipsum photo',
          'Content': 'Lorem Lorem ipsum photo'
        },            
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 0,
          'category': 'mobile',
          'title': 'Lorem Ipsum mobile',
          'Content': 'Lorem Lorem ipsum mobile'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 1,
          'category': 'mobile',
          'title': 'Lorem Ipsum mobile',
          'Content': 'Lorem Lorem ipsum mobile'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 2,
          'category': 'mobile',
          'title': 'Lorem Ipsum mobile',
          'Content': 'Lorem Lorem ipsum mobile'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 3,
          'category': 'mobile',
          'title': 'Lorem Ipsum mobile',
          'Content': 'Lorem Lorem ipsum mobile'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 4,
          'category': 'mobile',
          'title': 'Lorem Ipsum mobile',
          'Content': 'Lorem Lorem ipsum mobile'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 5,
          'category': 'mobile',
          'title': 'Lorem Ipsum mobile',
          'Content': 'Lorem Lorem ipsum mobile'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 0,
          'category': 'illustration',
          'title': 'Lorem Ipsum illustration',
          'Content': 'Lorem Lorem ipsum illustration',
          'activebool': 'true'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 1,
          'category': 'illustration',
          'title': 'Lorem Ipsum illustrationm',
          'Content': 'Lorem Lorem ipsum illustration'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 2,
          'category': 'illustration',
          'title': 'Lorem Ipsum illustration',
          'Content': 'Lorem Lorem ipsum illustration'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 3,
          'category': 'illustration',
          'title': 'Lorem Ipsum illustration',
          'Content': 'Lorem Lorem ipsum illustration'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 4,
          'category': 'illustration',
          'title': 'Lorem Ipsum illustration',
          'Content': 'Lorem Lorem ipsum illustration'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 5,
          'category': 'illustration',
          'title': 'Lorem Ipsum illustration',
          'Content': 'Lorem Lorem ipsum illustration'
        },            
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 0,
          'category': 'webdesign',
          'title': 'Lorem Ipsum web',
          'Content': 'Lorem Lorem ipsum web'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 1,
          'category': 'webdesign',
          'title': 'Lorem Ipsum web',
          'Content': 'Lorem Lorem ipsum web'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 2,
          'category': 'webdesign',
          'title': 'Lorem Ipsum web',
          'Content': 'Lorem Lorem ipsum web'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 3,
          'category': 'webdesign',
          'title': 'Lorem Ipsum web',
          'Content': 'Lorem Lorem ipsum web'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 4,
          'category': 'webdesign',
          'title': 'Lorem Ipsum web',
          'Content': 'Lorem Lorem ipsum web'
        },
        {
          'image': [require("./components/projectimages/photo@1X.png")],
          'index': 5,
          'category': 'webdesign',
          'title': 'Lorem Ipsum web',
          'Content': 'Lorem Lorem ipsum web'
        },          
      ]
    },    
    this.get('/api/dropdown', () => {
        return[
        {
          'index': 0,
          'title': 'Nam liber tempor cum soluta nobis eleifend optionasdasdasd',
          'content': '0 Qisi enim ad minim veniam, quis nostrud exerciasdasd tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.'
        },
        {
          'index': 1,
          'title': 'Nam liber tempor cum soluta nobis eleifend option',
          'content': '1 Qisi enim ad minim veniam, quis nostrud exerci asdasdasdasdastation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.'
        },
        {
          'index': 2,
          'title': 'Nam liber tempor cum soluta nobis eleifend optionasdasd',
          'content': '2 Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.'
        },
        {
          'index': 3,
          'title': 'Nam liber tempor cum soluta nobi',
          'content': '3 Qisi enim ad minim veniam, quiasdasdasdasds nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.'
        }, 
      ]
    }),
    this.get('api/posts', () => {
        return[
        {
          'index': 1,
          'month': 'jul',
          'day': 5, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 1',
          'image':[require("./components/Others/Posts/post2.jpg")],
          'link' : "https://www.youtube.com/"
        },
        {
          'index': 2,
          'month': 'jul',
          'day': 5, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 2',
          'image':[require("./components/Others/Posts/post2.jpg")],
          'link' : "'https://www.youtube.com/'"
        },
        {
          'index': 3,
          'month': 'jul',
          'day': 5, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 3',
          'image':[require("./components/Others/Posts/post2.jpg")],
          'link' : "'https://www.youtube.com/'"
        },
        {
          'index': 4,
          'month': 'aug',
          'day': 25, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 4',
          'image':[require("./components/Others/Posts/post1.jpg")],
          'link' : "'https://www.youtube.com/'"
        },
        {
          'index': 5,
          'month': 'sept',
          'day': 16, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 5',
          'image':[require("./components/Others/Posts/post2.jpg")],
          'link' : "'https://www.youtube.com/'"
        },
        {
          'index': 6,
          'month': 'sept',
          'day': 16, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 6',
          'image':[require("./components/Others/Posts/post2.jpg")],
          'link' : "'https://www.youtube.com/'"
        },
        {
          'index': 7,
          'month': 'sept',
          'day': 16, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 7',
          'image':[require("./components/Others/Posts/post2.jpg")],
          'link' : "'https://www.youtube.com/'"
        },
        {
          'index': 8,
          'month': 'sept',
          'day': 16, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 8',
          'image':[require("./components/Others/Posts/post2.jpg")],
          'link' : "'https://www.youtube.com/'"
        },
        {
          'index': 9,
          'month': 'sept',
          'day': 16, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 9',
          'image':[require("./components/Others/Posts/post2.jpg")],
          'link' : "'https://www.youtube.com/'"
        },      
        {
          'index': 10,
          'month': 'sept',
          'day': 16, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 10',
          'image':[require("./components/Others/Posts/post2.jpg")],
          'link' : "'https://www.youtube.com/'"
        },
        {
          'index': 11,
          'month': 'sept',
          'day': 16, 
          'title': 'Lorem Ipsum title',
          'content': 'Lorem Ipsum content 11',
          'image':[require("./components/Others/Posts/post2.jpg")],
          'link' : "'https://www.youtube.com/'"
        },          
      ]
    },    
    this.get('/api/emails', (schema) => {

      return [
        schema.emails.all(),
        {'type': 'error', status: 450, 'text': 'Töltsd ki az összes mezőt!'}
      ]
      
    },
    ),
    this.post('/api/emails', (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      return schema.emails.create(attrs)    
    }
    ),
    this.get('api/error', () => {
      return[
        {
          'status': 450,
          'text': 'Ki kell töltened minden mezőt!'      
        }
      ]
    }),
    this.get('api/twitter', () =>{
      return[
        {
          'content': '@waxom Cum soluta nobis eleifend option congue nihil imperdiet doming',
          'time': 3 + ' ' +  'hours'
        },
        {
          'content': '@waxom Cum soluta nobis eleifend option congue nihil imperdiet doming',
          'time': 0 + ' ' +  'minutes'
        },
        {
          'content': '@waxom Cum soluta nobis eleifend option congue nihil imperdiet doming',
          'time': 12 + ' ' + 'hours'
        }
      ]
    })
    )

  )      
}
})

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false







new Vue({
  render: h => h(App),
}).$mount('#app')
