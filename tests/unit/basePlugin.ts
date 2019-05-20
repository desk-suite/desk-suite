import { shallowMount, createLocalVue } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import plugin from "../../src/index";
import credentials from "../../.credentials";
import { DataBase } from "@/utilities/classes/database";
import firebase from "firebase";

const localVue = createLocalVue();
localVue.use(plugin, { credentials });
const msg = "new message";
const wrapper = shallowMount(HelloWorld, {
  localVue,
  propsData: { msg }
});
export const dataBase: DataBase = (wrapper.vm as any).$desk.dataBase;
export const finish = async () => {
  await firebase.firestore().disableNetwork();
};
export default {
  wrapper,
  dataBase,
  credentials,
  finish
};
