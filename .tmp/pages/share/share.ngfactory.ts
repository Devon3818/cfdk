/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './share';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/toolbar/toolbar';
import * as import12 from '@angular/forms/src/directives/ng_model';
import * as import13 from '@angular/forms/src/directives/ng_control_status';
import * as import14 from 'ionic-angular/components/segment/segment';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '@angular/common/src/directives/ng_switch';
import * as import17 from 'ionic-angular/components/content/content';
import * as import18 from 'ionic-angular/config/config';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/segment/segment.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/forms/src/directives/ng_control';
var renderType_SharePage_Host:import0.RenderComponentType = (null as any);
class _View_SharePage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _SharePage_0_4:import3.SharePage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SharePage_Host0,renderType_SharePage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-share',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_SharePage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SharePage_0_4 = new import3.SharePage(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._SharePage_0_4,[],compView_0);
    compView_0.create(this._SharePage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.SharePage) && (0 === requestNodeIndex))) { return this._SharePage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_SharePage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_SharePage_Host === (null as any))) { (renderType_SharePage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_SharePage_Host0(viewUtils,parentInjector,declarationEl);
}
export const SharePageNgFactory:import10.ComponentFactory<import3.SharePage> = new import10.ComponentFactory<import3.SharePage>('page-share',viewFactory_SharePage_Host0,import3.SharePage);
const styles_SharePage:any[] = [];
var renderType_SharePage:import0.RenderComponentType = (null as any);
class _View_SharePage0 extends import1.AppView<import3.SharePage> {
  _el_0:any;
  _Header_0_3:import11.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Toolbar_2_4:import11.Toolbar;
  _text_3:any;
  _el_4:any;
  _NgModel_4_3:import12.NgModel;
  _NgControl_4_4:any;
  _NgControlStatus_4_5:import13.NgControlStatus;
  _Segment_4_6:import14.Segment;
  _query_SegmentButton_4_0:import15.QueryList<any>;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _SegmentButton_6_4:import14.SegmentButton;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _SegmentButton_9_4:import14.SegmentButton;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _SegmentButton_12_4:import14.SegmentButton;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  /*private*/ _appEl_18:import2.AppElement;
  _NgSwitch_18_4:import16.NgSwitch;
  _Content_18_5:import17.Content;
  _text_19:any;
  _anchor_20:any;
  /*private*/ _appEl_20:import2.AppElement;
  _TemplateRef_20_5:any;
  _NgSwitchCase_20_6:import16.NgSwitchCase;
  _text_21:any;
  _anchor_22:any;
  /*private*/ _appEl_22:import2.AppElement;
  _TemplateRef_22_5:any;
  _NgSwitchCase_22_6:import16.NgSwitchCase;
  _text_23:any;
  _anchor_24:any;
  /*private*/ _appEl_24:import2.AppElement;
  _TemplateRef_24_5:any;
  _NgSwitchCase_24_6:import16.NgSwitchCase;
  _text_25:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SharePage0,renderType_SharePage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import11.Header(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import20.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-toolbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'color','secondary');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import21.viewFactory_Toolbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Toolbar_2_4 = new import11.Toolbar(this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Toolbar_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n\n        ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-segment',(null as any));
    this.renderer.setElementAttribute(this._el_4,'color','fff');
    this._NgModel_4_3 = new import12.NgModel((null as any),(null as any),(null as any),(null as any));
    this._NgControl_4_4 = this._NgModel_4_3;
    this._NgControlStatus_4_5 = new import13.NgControlStatus(this._NgControl_4_4);
    this._Segment_4_6 = new import14.Segment(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_4),this.renderer,this._NgControl_4_4);
    this._query_SegmentButton_4_0 = new import15.QueryList<any>();
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'ion-segment-button',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','segment-button');
    this.renderer.setElementAttribute(this._el_6,'role','button');
    this.renderer.setElementAttribute(this._el_6,'tappable','');
    this.renderer.setElementAttribute(this._el_6,'value','new1');
    this._appEl_6 = new import2.AppElement(6,4,this,this._el_6);
    var compView_6:any = import22.viewFactory_SegmentButton0(this.viewUtils,this.injector(6),this._appEl_6);
    this._SegmentButton_6_4 = new import14.SegmentButton(this.renderer,new import19.ElementRef(this._el_6));
    this._appEl_6.initComponent(this._SegmentButton_6_4,[],compView_6);
    this._text_7 = this.renderer.createText((null as any),'\n                厨房问答\n            ',(null as any));
    compView_6.create(this._SegmentButton_6_4,[[].concat([this._text_7])],(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_4,'ion-segment-button',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','segment-button');
    this.renderer.setElementAttribute(this._el_9,'role','button');
    this.renderer.setElementAttribute(this._el_9,'tappable','');
    this.renderer.setElementAttribute(this._el_9,'value','new2');
    this._appEl_9 = new import2.AppElement(9,4,this,this._el_9);
    var compView_9:any = import22.viewFactory_SegmentButton0(this.viewUtils,this.injector(9),this._appEl_9);
    this._SegmentButton_9_4 = new import14.SegmentButton(this.renderer,new import19.ElementRef(this._el_9));
    this._appEl_9.initComponent(this._SegmentButton_9_4,[],compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n                厨房新作\n            ',(null as any));
    compView_9.create(this._SegmentButton_9_4,[[].concat([this._text_10])],(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_4,'ion-segment-button',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','segment-button');
    this.renderer.setElementAttribute(this._el_12,'role','button');
    this.renderer.setElementAttribute(this._el_12,'tappable','');
    this.renderer.setElementAttribute(this._el_12,'value','new3');
    this._appEl_12 = new import2.AppElement(12,4,this,this._el_12);
    var compView_12:any = import22.viewFactory_SegmentButton0(this.viewUtils,this.injector(12),this._appEl_12);
    this._SegmentButton_12_4 = new import14.SegmentButton(this.renderer,new import19.ElementRef(this._el_12));
    this._appEl_12.initComponent(this._SegmentButton_12_4,[],compView_12);
    this._text_13 = this.renderer.createText((null as any),'\n                厨房互动\n            ',(null as any));
    compView_12.create(this._SegmentButton_12_4,[[].concat([this._text_13])],(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n    ',(null as any));
    compView_2.create(this._Toolbar_2_4,[
      [],
      [],
      [],
      [].concat([
        this._text_3,
        this._el_4,
        this._text_15
      ]
      )
    ]
    ,(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_18 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_18 = new import2.AppElement(18,(null as any),this,this._el_18);
    var compView_18:any = import23.viewFactory_Content0(this.viewUtils,this.injector(18),this._appEl_18);
    this._NgSwitch_18_4 = new import16.NgSwitch();
    this._Content_18_5 = new import17.Content(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_18),this.renderer,this.parentInjector.get(import24.App),this.parentInjector.get(import25.Keyboard),this.parentInjector.get(import26.NgZone),this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import27.Tabs,(null as any)));
    this._appEl_18.initComponent(this._Content_18_5,[],compView_18);
    this._text_19 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._anchor_20 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_20 = new import2.AppElement(20,18,this,this._anchor_20);
    this._TemplateRef_20_5 = new import28.TemplateRef_(this._appEl_20,viewFactory_SharePage1);
    this._NgSwitchCase_20_6 = new import16.NgSwitchCase(this._appEl_20.vcRef,this._TemplateRef_20_5,this._NgSwitch_18_4);
    this._text_21 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._anchor_22 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_22 = new import2.AppElement(22,18,this,this._anchor_22);
    this._TemplateRef_22_5 = new import28.TemplateRef_(this._appEl_22,viewFactory_SharePage2);
    this._NgSwitchCase_22_6 = new import16.NgSwitchCase(this._appEl_22.vcRef,this._TemplateRef_22_5,this._NgSwitch_18_4);
    this._text_23 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._anchor_24 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_24 = new import2.AppElement(24,18,this,this._anchor_24);
    this._TemplateRef_24_5 = new import28.TemplateRef_(this._appEl_24,viewFactory_SharePage3);
    this._NgSwitchCase_24_6 = new import16.NgSwitchCase(this._appEl_24.vcRef,this._TemplateRef_24_5,this._NgSwitch_18_4);
    this._text_25 = this.renderer.createText((null as any),'\n',(null as any));
    compView_18.create(this._Content_18_5,[
      [],
      [].concat([
        this._text_19,
        this._appEl_20,
        this._text_21,
        this._appEl_22,
        this._text_23,
        this._appEl_24,
        this._text_25
      ]
      ),
      []
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_4,'ngModelChange',this.eventHandler(this._handle_ngModelChange_4_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    const subscription_0:any = this._NgModel_4_3.update.subscribe(this.eventHandler(this._handle_ngModelChange_4_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    this._expr_12 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_9,'click',this.eventHandler(this._handle_click_9_0.bind(this)));
    this._expr_14 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_12,'click',this.eventHandler(this._handle_click_12_0.bind(this)));
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._anchor_20,
      this._text_21,
      this._anchor_22,
      this._text_23,
      this._anchor_24,
      this._text_25
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.SegmentButton) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._SegmentButton_6_4; }
    if (((token === import14.SegmentButton) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._SegmentButton_9_4; }
    if (((token === import14.SegmentButton) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._SegmentButton_12_4; }
    if (((token === import12.NgModel) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgModel_4_3; }
    if (((token === import29.NgControl) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgControl_4_4; }
    if (((token === import13.NgControlStatus) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgControlStatus_4_5; }
    if (((token === import14.Segment) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._Segment_4_6; }
    if (((token === import11.Toolbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Toolbar_2_4; }
    if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._Header_0_3; }
    if (((token === import28.TemplateRef) && (20 === requestNodeIndex))) { return this._TemplateRef_20_5; }
    if (((token === import16.NgSwitchCase) && (20 === requestNodeIndex))) { return this._NgSwitchCase_20_6; }
    if (((token === import28.TemplateRef) && (22 === requestNodeIndex))) { return this._TemplateRef_22_5; }
    if (((token === import16.NgSwitchCase) && (22 === requestNodeIndex))) { return this._NgSwitchCase_22_6; }
    if (((token === import28.TemplateRef) && (24 === requestNodeIndex))) { return this._TemplateRef_24_5; }
    if (((token === import16.NgSwitchCase) && (24 === requestNodeIndex))) { return this._NgSwitchCase_24_6; }
    if (((token === import16.NgSwitch) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 25)))) { return this._NgSwitch_18_4; }
    if (((token === import17.Content) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 25)))) { return this._Content_18_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changed = false;
    const currVal_0:any = 'secondary';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Toolbar_2_4.color = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) { this._appEl_2.componentView.markAsCheckOnce(); }
    changes = (null as any);
    const currVal_3:any = this.context.pet;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgModel_4_3.model = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._NgModel_4_3.ngOnChanges(changes); }
    const currVal_10:any = 'fff';
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._Segment_4_6.color = currVal_10;
      this._expr_10 = currVal_10;
    }
    const currVal_12:any = 'new1';
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._SegmentButton_6_4.value = currVal_12;
      this._expr_12 = currVal_12;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SegmentButton_6_4.ngOnInit(); }
    const currVal_14:any = 'new2';
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this._SegmentButton_9_4.value = currVal_14;
      this._expr_14 = currVal_14;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SegmentButton_9_4.ngOnInit(); }
    const currVal_16:any = 'new3';
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this._SegmentButton_12_4.value = currVal_16;
      this._expr_16 = currVal_16;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SegmentButton_12_4.ngOnInit(); }
    const currVal_17:any = this.context.pet;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this._NgSwitch_18_4.ngSwitch = currVal_17;
      this._expr_17 = currVal_17;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_18_5.ngOnInit(); }
    const currVal_19:any = 'new1';
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this._NgSwitchCase_20_6.ngSwitchCase = currVal_19;
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = 'new2';
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this._NgSwitchCase_22_6.ngSwitchCase = currVal_20;
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = 'new3';
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this._NgSwitchCase_24_6.ngSwitchCase = currVal_21;
      this._expr_21 = currVal_21;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { if (this._query_SegmentButton_4_0.dirty) {
      this._query_SegmentButton_4_0.reset([
        this._SegmentButton_6_4,
        this._SegmentButton_9_4,
        this._SegmentButton_12_4
      ]
      );
      this._Segment_4_6._buttons = this._query_SegmentButton_4_0;
      this._query_SegmentButton_4_0.notifyOnChanges();
    } }
    const currVal_1:any = this._Toolbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_4:any = this._NgControlStatus_4_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_4,'ng-untouched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatus_4_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_4,'ng-touched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatus_4_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_4,'ng-pristine',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatus_4_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_4,'ng-dirty',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatus_4_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_4,'ng-valid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatus_4_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_4,'ng-invalid',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_18:any = this._Content_18_5._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_18,'statusbar-padding',currVal_18);
      this._expr_18 = currVal_18;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Segment_4_6.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._NgModel_4_3.ngOnDestroy();
    this._Content_18_5.ngOnDestroy();
  }
  private _handle_ngModelChange_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.pet = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_click_6_0($event:any):boolean {
    this._appEl_6.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._SegmentButton_6_4.onClick()) !== false);
    return (true && pd_0);
  }
  private _handle_click_9_0($event:any):boolean {
    this._appEl_9.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._SegmentButton_9_4.onClick()) !== false);
    return (true && pd_0);
  }
  private _handle_click_12_0($event:any):boolean {
    this._appEl_12.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._SegmentButton_12_4.onClick()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_SharePage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.SharePage> {
  if ((renderType_SharePage === (null as any))) { (renderType_SharePage = viewUtils.createRenderComponentType('/Users/apple/Desktop/github/cfdk/.tmp/pages/share/share.html',0,import9.ViewEncapsulation.None,styles_SharePage,{})); }
  return new _View_SharePage0(viewUtils,parentInjector,declarationEl);
}
class _View_SharePage1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SharePage1,renderType_SharePage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'section',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'1',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_SharePage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_SharePage1(viewUtils,parentInjector,declarationEl);
}
class _View_SharePage2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SharePage2,renderType_SharePage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'section',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'2',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_SharePage2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_SharePage2(viewUtils,parentInjector,declarationEl);
}
class _View_SharePage3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SharePage3,renderType_SharePage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'section',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'3',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_SharePage3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_SharePage3(viewUtils,parentInjector,declarationEl);
}