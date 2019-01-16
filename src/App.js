import React, { Component } from 'react';
import logo from './logo.svg';
import jsPDF from "jspdf";
import './App.css';

class App extends Component {

  print = () => {
    var doc = new jsPDF();
    
    doc.setFont('Deng', 'normal'); // set font
    doc.setFontSize(20);

    doc.text("なに中国", 20, 20);
    doc.text(15, 30, 'こんにちは。はじめまして。');

    //multi-lines Test
    var paragraph = '相次いで廃止された寝台列車に代わり、いまや夜間の移動手段として主力になりつつある夜行バス。「安い」「寝ながら移動できる」などのメリットを生かすため、運行ダイヤはどのように組まれているのでしょうか。夜遅く出て、朝早く着くというメリット夜行バスを使うメリットといえば、各種アンケートでもいちばん多い回答の「安い」以外に、';
    var lines = doc.splitTextToSize(paragraph, 150);
    doc.text(15, 60, lines);
    doc.save(`合同模板.pdf`);
  }

  printTable=()=>{
    var doc = new jsPDF();
    doc.setFont('Deng', 'normal'); // set font
    doc.text(20,20,'哇哈哈');

    doc.autoTable({
      // headStyles: { fillColor: [255, 255, 255] },
      startY: 40,
      // margin: {horizontal: 7},
      theme:'grid',
      html: "#my-table",
      styles: { font: "Deng" }, //表格里设置为中文字体
      headStyles:{fontStyle:'normal'}
    });
    doc.save(`合同模板.pdf`);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.print}>下载</button>
        <button onClick={this.printTable}>下载Table</button>
        <table id="my-table"  border="1">
          <thead>
            <tr>
              <td>title1</td>
              <td>标题2</td>
              <td>标题3</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>内容1</td>
              <td>内容2</td>
              <td>内容3</td>
            </tr>
            <tr>
              <td>内容11</td>
              <td>内容21</td>
              <td>内容31</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容11</td>
              <td>内容21</td>
              <td>内容31</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容11</td>
              <td>内容21</td>
              <td>内容31</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容11</td>
              <td>内容21</td>
              <td>内容31</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容1</td>
              <td>内容2</td>
              <td>内容3</td>
            </tr>
            <tr>
              <td>内容11</td>
              <td>内容21</td>
              <td>内容31</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容11</td>
              <td>内容21</td>
              <td>内容31</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容11</td>
              <td>内容21</td>
              <td>内容31</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容1</td>
              <td>内容2</td>
              <td>内容3</td>
            </tr>
            <tr>
              <td>内容11</td>
              <td>内容21</td>
              <td>内容31</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
            <tr>
              <td>内容11111</td>
              <td>内容21111</td>
              <td>内容31111</td>
            </tr>
            <tr>
              <td>内容11</td>
              <td>内容21</td>
              <td>内容31</td>
            </tr>
            <tr>
              <td>内容111</td>
              <td>内容211</td>
              <td>内容311</td>
            </tr>
            <tr>
              <td>内容1111</td>
              <td>内容2111</td>
              <td>内容3111</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
