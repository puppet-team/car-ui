import Vue from 'vue'
import {Button, Cell, CellGroup} from "vant";
import VueRouter from 'vue-router'
import {Image as VanImage} from 'vant';
import {Search} from 'vant';
import {List} from 'vant';
import qs from 'qs';
import {Col, Row} from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Form } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Icon } from 'vant';
import { ActionSheet } from 'vant';

Vue.use(ActionSheet);

Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Icon);


Vue.use(Form);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);


// 注册
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(VueRouter)
Vue.use(VanImage);
Vue.use(Search);
Vue.use(List);
Vue.use(qs);
Vue.use(Col);
Vue.use(Row);

