import React from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';

import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as ArticleList} from '../../../components/articleList/';
import {view as Title} from '../../../components/pageTitle/';

import 'swiper/dist/css/swiper.min.css';
import '../../style.css';
import './style.css';

import toPc from '../../../utilities/toPc';

import icon01 from './images/sec01-icon01.png';
import icon02 from './images/sec01-icon02.png';
import icon03 from './images/sec01-icon03.png';
import icon04 from './images/sec01-icon04.png';
import icon05 from './images/sec01-icon05.png';
import icon06 from './images/sec01-icon06.png';

import img01 from './images/image-1.png';
import img02 from './images/image-2.png';
import img03 from './images/image-3.png';
import img04 from './images/image-4.png';
import img05 from './images/image-5.png';

import anli01 from './images/anli-1.png';
import anli02 from './images/anli-2.png';
import anli03 from './images/anli-3.png';
import anli04 from './images/anli-4.png';
import anli05 from './images/anli-5.png';

const sec01Items = [  // 模块一数据: 擅长挽回的婚姻类型
  [
    {
      icon: icon01,
      text: '第三者插足'
    },
    {
      icon: icon02,
      text: '性格不合'
    }
  ],
  [
    {
      icon: icon03,
      text: '两地分局'
    },
    {
      icon: icon04,
      text: '经济矛盾'
    }
  ],
  [
    {
      icon: icon05,
      text: '婆媳关系'
    },
    {
      icon: icon06,
      text: '家庭冷暴力'
    }
  ]
];

const sec02Items = [  // 模块二数据: 婚姻危机出现的原因
  [
    {
      title: '两地分居，信任缺失',
      img: img01
    }
  ],
  [
    {
      title: '性格不合，长期争吵',
      img: img02
    }
  ],
  [
    {
      title: '婆媳关系，子女教育',
      img: img03
    }
  ],
  [
    {
      title: '沟通不畅，三观不合',
      img: img04
    }
  ],
  [
    {
      title: '婚外情，第三者',
      img: img05
    }
  ]
];

const articles = [  // 模块三数据: 成功案例
  {
    url: 'articles/a2/a2_1/',
    title: '百依百顺没有用，读懂女人心你才能挽回你的爱情',
    des: '“老师，前两天我女朋友跟我提了分手，原因是说我不理解她。冬天送手套，夏天送西瓜，过生日送花，每个节日我都没落下，我还不够理解她吗？我哪里不够理解她？”',
    image: anli01
  }, 
  {
    url: 'articles/a2/a2_2/',
    title: '当你下跪都无法挽回心死女友时，你该试试“幽灵心态”',
    des: '这样的结果令他难以接受，自己堂堂男子汉最后连膝盖都献上了，却仍然无法让她回来，这么多年的感情说不要就不要了，女人真的太绝情了！',
    image: anli02
  }, 
  {
    url: 'articles/a2/a2_3/',
    title: '挽回攻略：如何跟女朋友复联进行二次吸引恢复爱情？',
    des: '女人是念旧的动物，她会在一段感情结束后，即使是这段感情给予她很大的伤害，她也会在很长的一段时间内念念不忘；女人是感性的动物，她会在看到别的情侣或者偶然去到你们曾经留下回忆的地方，甚至是一句歌词，都会使她回忆起之前的爱情。但矜持是女人相伴于前两种特性所存在的本能，即使她对你百般的思念，也不会想要去主动联系你。',
    image: anli03
  }, 
  {
    url: 'articles/a2/a2_4/',
    title: '普通白领男 逆袭法国留学白富美',
    des: '“懵懵懂懂27年，做着一份收入还不错的工作，大学毕业后就再没谈过恋爱，家人安排过相亲，朋友介绍过对象，可总是双方不合适。到了这个年纪，也会担心自己感情的归宿到底在哪，更不会想到，通过改变，会让我拥有之前只存在于幻想中的生活和故事。”',
    image: anli04
  }, 
  {
    url: 'articles/a2/a2_5/',
    title: '女人说分手拉黑后给你机会，掌握攻略教你复联挽回爱情',
    des: '有很对男人在和女人恋爱的时候，为了追到女生，曾经立下各种山盟海誓。好像各种情话都无法将自己的感情直抒胸臆。',
    image: anli05
  }
];

const Sec01 = () => (  // 模块一: 擅长挽回的婚姻类型
  <div className="page02-sec01">
    <Title title="擅长挽回的婚姻类型" />
    <div className="page02-sec01-content">
      {
	sec01Items.map((item, index) => {
	  return (
	    <div className="group" key={index}>
	      {
		item.map((innerItem, innerIndex) => {
		  return (
		    <div className="group-item" key={innerIndex}>
		      <div className="img">
			<img src={innerItem.icon} alt={innerItem.text} />
		      </div>
		      <span>{innerItem.text}</span>
		    </div>
		  )
		})
	      }
	    </div>
	  );
	})
      }
    </div>
  </div>
);

class Sec02 extends React.Component {  // 模块二: 婚姻危机出现的原因
  render() {
    return (
      <div className="page02-sec02">
	<Title title="婚姻危机出现的原因" />
	<div className="page02-sec02-content">
	  <div className="swiper-container" ref="swiper">
	    <div className="swiper-wrapper">
	      {
		sec02Items.map((item, index) => {
		  return (
		    <div className="swiper-slide" key={index}>
		      <div className="title text-center">
		        <i></i>
			<span>{item[0].title}</span>
		      </div>
		      <div className="img text-center">
		        <img src={item[0].img} alt={item[0].title} />
		      </div>
		    </div>
		  )
		})
	      }
	    </div>
	    <div className="swiper-pagination"></div>
	  </div>
	</div>
      </div>
    );
  }

  componentDidMount() {
    new Swiper(this.refs.swiper, {
      observer: true,
      autoplay: false,
      delay: 5000,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
}

const Sec03 = () => (  // 模块三: 成功案例
  <div className="page02-sec03">
    <Title title="成功案例" />
    {
      articles.map((item, index) => {
	return (
	  <ArticleList key={index}
	    articleUrl={`../${item.url}`}
	    articleTitle={item.title}
	    articleDescription={item.des}
	    articleImage={item.image}
	  />
	);
      })
    }
  </div>
);

const Content = () => (
  <div className="page02-content">
    <Sec01 />
    <Sec02 />
    <Sec03 />
  </div>
);

class Page02 extends React.Component {
  render() {
    return (
      <div className="page02">
	<Header home={false} title="挽救婚姻" />
	<Content />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page02;

