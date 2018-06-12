import { List, Map } from 'immutable';
import * as React from 'react';

export default class ImmutableComponent extends React.PureComponent {
  public componentDidMount() {
    // const map1 = Map({ a: 1, b: 2, c: 3 });
    // const map2 = map1.set('b', 50);
    // console.log(map1.get('b') + ' vs. ' + map2.get('b'));
    // const map2 = Map({ a: 1, b: 2, c: 3 });
    // console.log(map1.equals(map2));
    // this.testList();
    // this.testArray();
    this.testObj();
  }
  public testObj = () => {
    const map1 = Map({ a: 1, b: 2, c: 3, d: 4 });
    const map2 = Map({ c: 10, a: 20, t: 30 });
    const map4 = Map({ a: 7 });
    const obj = { d: 100, o: 200, g: 200 };
    const map3 = map1.merge(obj).merge(map2, map4);
    console.log(map3);
    const list1 = List([1, 2, 3]);
    const list2 = List([4, 5, 6]);
    const array = [7, 8, 9];
    const list3 = list1.concat(list2, array);
    console.log(list3);
  };
  public testArray = () => {
    const alpha = Map({ a: 1, b: 2, c: 3, d: 4 });
    console.log(alpha.map((v, k: string) => k.toUpperCase()).join());
  };
  public testList = () => {
    const list1 = List([1, 2]);
    const list2 = list1.push(3, 4, 5);
    console.log(list1);
    console.log(list2);
  };
  public render() {
    return <div>我是ImmutableComponent组件</div>;
  }
}
