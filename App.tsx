import * as React from 'react';
import './style.css';
// import _suc from './suc.js';
// const Suc = eval(_suc);
export default function App() {
  function addComp() {
    const OtherComponent = React.lazy(() =>
      import(
        'https://g.alipay.com/@alipay/suc-debugger@0.1.4/assets/index.morpho.js'
      )
    );
    // console.log('Suc:', import('https://g.alipay.com/@alipay/suc-debugger@0.1.4/assets/index.morpho.js'));
    // Suc();
    fetch(
      'https://g.alipay.com/@alipay/suc-debugger@0.1.4/assets/index.morpho.js'
    )
      .then((res) => {
        console.log(res);
        return res.clone().text();
      })
      .then((res2) => {
        // console.log('res2=', res2, typeof res2);
      })
      .catch((e) => {
        console.log('e:', e);
      });
  }
  return (
    <div>
      <button onClick={addComp}>添加外域组件</button>
      {/* <Suc /> */}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
