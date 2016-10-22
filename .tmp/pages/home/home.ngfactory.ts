/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './home';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/content/content';
import * as import12 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import13 from 'ionic-angular/config/config';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from 'ionic-angular/components/app/app';
import * as import16 from 'ionic-angular/util/keyboard';
import * as import17 from '@angular/core/src/zone/ng_zone';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from 'ionic-angular/components/tabs/tabs';
var renderType_HomePage_Host:import0.RenderComponentType = (null as any);
class _View_HomePage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HomePage_0_4:import3.HomePage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HomePage_Host0,renderType_HomePage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-home',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomePage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HomePage_0_4 = new import3.HomePage(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._HomePage_0_4,[],compView_0);
    compView_0.create(this._HomePage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HomePage) && (0 === requestNodeIndex))) { return this._HomePage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_HomePage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_HomePage_Host === (null as any))) { (renderType_HomePage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_HomePage_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomePageNgFactory:import10.ComponentFactory<import3.HomePage> = new import10.ComponentFactory<import3.HomePage>('page-home',viewFactory_HomePage_Host0,import3.HomePage);
const styles_HomePage:any[] = [];
var renderType_HomePage:import0.RenderComponentType = (null as any);
class _View_HomePage0 extends import1.AppView<import3.HomePage> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Content_0_4:import11.Content;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _el_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _text_42:any;
  _text_43:any;
  _el_44:any;
  _text_45:any;
  _el_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _text_50:any;
  _text_51:any;
  _el_52:any;
  _text_53:any;
  _el_54:any;
  _text_55:any;
  _el_56:any;
  _text_57:any;
  _text_58:any;
  _text_59:any;
  _el_60:any;
  _text_61:any;
  _el_62:any;
  _text_63:any;
  _el_64:any;
  _text_65:any;
  _text_66:any;
  _text_67:any;
  _text_68:any;
  _text_69:any;
  _el_70:any;
  _text_71:any;
  _el_72:any;
  _text_73:any;
  _el_74:any;
  _text_75:any;
  _text_76:any;
  _el_77:any;
  _text_78:any;
  _text_79:any;
  _el_80:any;
  _text_81:any;
  _el_82:any;
  _text_83:any;
  _el_84:any;
  _text_85:any;
  _text_86:any;
  _el_87:any;
  _text_88:any;
  _el_89:any;
  _text_90:any;
  _text_91:any;
  _text_92:any;
  _text_93:any;
  _el_94:any;
  _text_95:any;
  _el_96:any;
  _text_97:any;
  _el_98:any;
  _text_99:any;
  _text_100:any;
  _el_101:any;
  _text_102:any;
  _el_103:any;
  _text_104:any;
  _text_105:any;
  _text_106:any;
  _text_107:any;
  _el_108:any;
  _text_109:any;
  _el_110:any;
  _text_111:any;
  _el_112:any;
  _text_113:any;
  _text_114:any;
  _el_115:any;
  _text_116:any;
  _el_117:any;
  _text_118:any;
  _text_119:any;
  _text_120:any;
  _text_121:any;
  _text_122:any;
  _text_123:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HomePage0,renderType_HomePage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import12.viewFactory_Content0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Content_0_4 = new import11.Content(this.parentInjector.get(import13.Config),new import14.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import15.App),this.parentInjector.get(import16.Keyboard),this.parentInjector.get(import17.NgZone),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import19.Tabs,(null as any)));
    this._appEl_0.initComponent(this._Content_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'section',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','home-page');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','swiper-container');
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','swiper-wrapper');
    this._text_7 = this.renderer.createText(this._el_6,'\n\n                ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'div',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','swiper-slide');
    this._text_9 = this.renderer.createText(this._el_8,'\n                    ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'img',(null as any));
    this.renderer.setElementAttribute(this._el_10,'src','assets/img2/home_banner_1.jpeg');
    this._text_11 = this.renderer.createText(this._el_8,'\n                ',(null as any));
    this._text_12 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_6,'div',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','swiper-slide');
    this._text_14 = this.renderer.createText(this._el_13,'\n                    ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_13,'img',(null as any));
    this.renderer.setElementAttribute(this._el_15,'src','assets/img2/home_banner_2.jpeg');
    this._text_16 = this.renderer.createText(this._el_13,'\n                ',(null as any));
    this._text_17 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_6,'div',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','swiper-slide');
    this._text_19 = this.renderer.createText(this._el_18,'\n                    ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_18,'img',(null as any));
    this.renderer.setElementAttribute(this._el_20,'src','assets/img2/home_banner_3.jpeg');
    this._text_21 = this.renderer.createText(this._el_18,'\n                ',(null as any));
    this._text_22 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_6,'div',(null as any));
    this.renderer.setElementAttribute(this._el_23,'class','swiper-slide');
    this._text_24 = this.renderer.createText(this._el_23,'\n                    ',(null as any));
    this._el_25 = this.renderer.createElement(this._el_23,'img',(null as any));
    this.renderer.setElementAttribute(this._el_25,'src','assets/img2/home_banner_4.jpeg');
    this._text_26 = this.renderer.createText(this._el_23,'\n                ',(null as any));
    this._text_27 = this.renderer.createText(this._el_6,'\n\n            ',(null as any));
    this._text_28 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._text_29 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_30,'class','swiper-pagination');
    this._text_31 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_32 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_33 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_34 = this.renderer.createElement(this._el_2,'section',(null as any));
    this.renderer.setElementAttribute(this._el_34,'id','home_menu');
    this._text_35 = this.renderer.createText(this._el_34,'\n            ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_34,'div',(null as any));
    this.renderer.setElementAttribute(this._el_36,'class','home_menu_list');
    this._text_37 = this.renderer.createText(this._el_36,'\n                ',(null as any));
    this._el_38 = this.renderer.createElement(this._el_36,'img',(null as any));
    this.renderer.setElementAttribute(this._el_38,'src','assets/icon/home/m1.png');
    this._text_39 = this.renderer.createText(this._el_36,'\n                ',(null as any));
    this._el_40 = this.renderer.createElement(this._el_36,'p',(null as any));
    this._text_41 = this.renderer.createText(this._el_40,'菜谱分类',(null as any));
    this._text_42 = this.renderer.createText(this._el_36,'\n            ',(null as any));
    this._text_43 = this.renderer.createText(this._el_34,'\n            ',(null as any));
    this._el_44 = this.renderer.createElement(this._el_34,'div',(null as any));
    this.renderer.setElementAttribute(this._el_44,'class','home_menu_list');
    this._text_45 = this.renderer.createText(this._el_44,'\n                ',(null as any));
    this._el_46 = this.renderer.createElement(this._el_44,'img',(null as any));
    this.renderer.setElementAttribute(this._el_46,'src','assets/icon/home/m2.png');
    this._text_47 = this.renderer.createText(this._el_44,'\n                ',(null as any));
    this._el_48 = this.renderer.createElement(this._el_44,'p',(null as any));
    this._text_49 = this.renderer.createText(this._el_48,'视频',(null as any));
    this._text_50 = this.renderer.createText(this._el_44,'\n            ',(null as any));
    this._text_51 = this.renderer.createText(this._el_34,'\n            ',(null as any));
    this._el_52 = this.renderer.createElement(this._el_34,'div',(null as any));
    this.renderer.setElementAttribute(this._el_52,'class','home_menu_list');
    this._text_53 = this.renderer.createText(this._el_52,'\n                ',(null as any));
    this._el_54 = this.renderer.createElement(this._el_52,'img',(null as any));
    this.renderer.setElementAttribute(this._el_54,'src','assets/icon/home/m3.png');
    this._text_55 = this.renderer.createText(this._el_52,'\n                ',(null as any));
    this._el_56 = this.renderer.createElement(this._el_52,'p',(null as any));
    this._text_57 = this.renderer.createText(this._el_56,'养生头条',(null as any));
    this._text_58 = this.renderer.createText(this._el_52,'\n            ',(null as any));
    this._text_59 = this.renderer.createText(this._el_34,'\n            ',(null as any));
    this._el_60 = this.renderer.createElement(this._el_34,'div',(null as any));
    this.renderer.setElementAttribute(this._el_60,'class','home_menu_list');
    this._text_61 = this.renderer.createText(this._el_60,'\n                ',(null as any));
    this._el_62 = this.renderer.createElement(this._el_60,'img',(null as any));
    this.renderer.setElementAttribute(this._el_62,'src','assets/icon/home/m4.png');
    this._text_63 = this.renderer.createText(this._el_60,'\n                ',(null as any));
    this._el_64 = this.renderer.createElement(this._el_60,'p',(null as any));
    this._text_65 = this.renderer.createText(this._el_64,'工具分类',(null as any));
    this._text_66 = this.renderer.createText(this._el_60,'\n            ',(null as any));
    this._text_67 = this.renderer.createText(this._el_34,'\n        ',(null as any));
    this._text_68 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_69 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_70 = this.renderer.createElement(this._el_2,'section',(null as any));
    this.renderer.setElementAttribute(this._el_70,'class','home_hot');
    this._text_71 = this.renderer.createText(this._el_70,'\n            ',(null as any));
    this._el_72 = this.renderer.createElement(this._el_70,'div',(null as any));
    this.renderer.setElementAttribute(this._el_72,'class','home_hot_title');
    this._text_73 = this.renderer.createText(this._el_72,'\n                ',(null as any));
    this._el_74 = this.renderer.createElement(this._el_72,'p',(null as any));
    this._text_75 = this.renderer.createText(this._el_74,'养生头条',(null as any));
    this._text_76 = this.renderer.createText(this._el_72,'\n                ',(null as any));
    this._el_77 = this.renderer.createElement(this._el_72,'img',(null as any));
    this.renderer.setElementAttribute(this._el_77,'src','assets/icon/home/hot_more.png');
    this._text_78 = this.renderer.createText(this._el_72,'\n            ',(null as any));
    this._text_79 = this.renderer.createText(this._el_70,'\n            ',(null as any));
    this._el_80 = this.renderer.createElement(this._el_70,'div',(null as any));
    this.renderer.setElementAttribute(this._el_80,'class','home_hot_list');
    this._text_81 = this.renderer.createText(this._el_80,'\n                ',(null as any));
    this._el_82 = this.renderer.createElement(this._el_80,'div',(null as any));
    this.renderer.setElementAttribute(this._el_82,'class','home_hot_item_img');
    this._text_83 = this.renderer.createText(this._el_82,'\n                    ',(null as any));
    this._el_84 = this.renderer.createElement(this._el_82,'img',(null as any));
    this.renderer.setElementAttribute(this._el_84,'src','assets/img2/hot_1.jpeg');
    this._text_85 = this.renderer.createText(this._el_82,'\n                ',(null as any));
    this._text_86 = this.renderer.createText(this._el_80,'\n                ',(null as any));
    this._el_87 = this.renderer.createElement(this._el_80,'div',(null as any));
    this.renderer.setElementAttribute(this._el_87,'class','home_hot_item');
    this._text_88 = this.renderer.createText(this._el_87,'\n                    ',(null as any));
    this._el_89 = this.renderer.createElement(this._el_87,'p',(null as any));
    this.renderer.setElementAttribute(this._el_89,'class','home_hot_item_title');
    this._text_90 = this.renderer.createText(this._el_89,'明日霜降,入冬前养生3注意。',(null as any));
    this._text_91 = this.renderer.createText(this._el_87,'\n                ',(null as any));
    this._text_92 = this.renderer.createText(this._el_80,'\n            ',(null as any));
    this._text_93 = this.renderer.createText(this._el_70,'\n            ',(null as any));
    this._el_94 = this.renderer.createElement(this._el_70,'div',(null as any));
    this.renderer.setElementAttribute(this._el_94,'class','home_hot_list');
    this._text_95 = this.renderer.createText(this._el_94,'\n                ',(null as any));
    this._el_96 = this.renderer.createElement(this._el_94,'div',(null as any));
    this.renderer.setElementAttribute(this._el_96,'class','home_hot_item_img');
    this._text_97 = this.renderer.createText(this._el_96,'\n                    ',(null as any));
    this._el_98 = this.renderer.createElement(this._el_96,'img',(null as any));
    this.renderer.setElementAttribute(this._el_98,'src','assets/img2/hot_2.jpeg');
    this._text_99 = this.renderer.createText(this._el_96,'\n                ',(null as any));
    this._text_100 = this.renderer.createText(this._el_94,'\n                ',(null as any));
    this._el_101 = this.renderer.createElement(this._el_94,'div',(null as any));
    this.renderer.setElementAttribute(this._el_101,'class','home_hot_item');
    this._text_102 = this.renderer.createText(this._el_101,'\n                    ',(null as any));
    this._el_103 = this.renderer.createElement(this._el_101,'p',(null as any));
    this.renderer.setElementAttribute(this._el_103,'class','home_hot_item_title');
    this._text_104 = this.renderer.createText(this._el_103,'明日霜降,入冬前养生3注意。',(null as any));
    this._text_105 = this.renderer.createText(this._el_101,'\n                ',(null as any));
    this._text_106 = this.renderer.createText(this._el_94,'\n            ',(null as any));
    this._text_107 = this.renderer.createText(this._el_70,'\n            ',(null as any));
    this._el_108 = this.renderer.createElement(this._el_70,'div',(null as any));
    this.renderer.setElementAttribute(this._el_108,'class','home_hot_list');
    this._text_109 = this.renderer.createText(this._el_108,'\n                ',(null as any));
    this._el_110 = this.renderer.createElement(this._el_108,'div',(null as any));
    this.renderer.setElementAttribute(this._el_110,'class','home_hot_item_img');
    this._text_111 = this.renderer.createText(this._el_110,'\n                    ',(null as any));
    this._el_112 = this.renderer.createElement(this._el_110,'img',(null as any));
    this.renderer.setElementAttribute(this._el_112,'src','assets/img2/hot_3.jpeg');
    this._text_113 = this.renderer.createText(this._el_110,'\n                ',(null as any));
    this._text_114 = this.renderer.createText(this._el_108,'\n                ',(null as any));
    this._el_115 = this.renderer.createElement(this._el_108,'div',(null as any));
    this.renderer.setElementAttribute(this._el_115,'class','home_hot_item');
    this._text_116 = this.renderer.createText(this._el_115,'\n                    ',(null as any));
    this._el_117 = this.renderer.createElement(this._el_115,'p',(null as any));
    this.renderer.setElementAttribute(this._el_117,'class','home_hot_item_title');
    this._text_118 = this.renderer.createText(this._el_117,'明日霜降,入冬前养生3注意。',(null as any));
    this._text_119 = this.renderer.createText(this._el_115,'\n                ',(null as any));
    this._text_120 = this.renderer.createText(this._el_108,'\n            ',(null as any));
    this._text_121 = this.renderer.createText(this._el_70,'\n        ',(null as any));
    this._text_122 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_123 = this.renderer.createText((null as any),'\n',(null as any));
    compView_0.create(this._Content_0_4,[
      [],
      [].concat([
        this._text_1,
        this._el_2,
        this._text_123
      ]
      ),
      []
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._text_42,
      this._text_43,
      this._el_44,
      this._text_45,
      this._el_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._text_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._el_54,
      this._text_55,
      this._el_56,
      this._text_57,
      this._text_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._el_62,
      this._text_63,
      this._el_64,
      this._text_65,
      this._text_66,
      this._text_67,
      this._text_68,
      this._text_69,
      this._el_70,
      this._text_71,
      this._el_72,
      this._text_73,
      this._el_74,
      this._text_75,
      this._text_76,
      this._el_77,
      this._text_78,
      this._text_79,
      this._el_80,
      this._text_81,
      this._el_82,
      this._text_83,
      this._el_84,
      this._text_85,
      this._text_86,
      this._el_87,
      this._text_88,
      this._el_89,
      this._text_90,
      this._text_91,
      this._text_92,
      this._text_93,
      this._el_94,
      this._text_95,
      this._el_96,
      this._text_97,
      this._el_98,
      this._text_99,
      this._text_100,
      this._el_101,
      this._text_102,
      this._el_103,
      this._text_104,
      this._text_105,
      this._text_106,
      this._text_107,
      this._el_108,
      this._text_109,
      this._el_110,
      this._text_111,
      this._el_112,
      this._text_113,
      this._text_114,
      this._el_115,
      this._text_116,
      this._el_117,
      this._text_118,
      this._text_119,
      this._text_120,
      this._text_121,
      this._text_122,
      this._text_123
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.Content) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 123)))) { return this._Content_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Content_0_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_0,'statusbar-padding',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Content_0_4.ngOnDestroy();
  }
}
export function viewFactory_HomePage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.HomePage> {
  if ((renderType_HomePage === (null as any))) { (renderType_HomePage = viewUtils.createRenderComponentType('/Users/apple/Desktop/github/cfdk/.tmp/pages/home/home.html',0,import9.ViewEncapsulation.None,styles_HomePage,{})); }
  return new _View_HomePage0(viewUtils,parentInjector,declarationEl);
}