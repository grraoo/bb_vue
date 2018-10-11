import Vue from 'vue';
import BillboardChart from '../src';

Vue.use(BillboardChart);

new Vue({
  el: '#app',
  data() {
    return {
      text: `text`,
      columns:  [
        [
          ["data1",  ...[...Array(5)].map(n => Math.round(Math.random() * 100))],
          ["data2", ...[...Array(5)].map(n => Math.round(Math.random() * 100))]
        ],
        [
          ["data1",  ...[...Array(6)].map(n => Math.round(Math.random() * 100))],
          ["data2", ...[...Array(6)].map(n => Math.round(Math.random() * 100))]
        ],
        [
          ["data1",  ...[...Array(7)].map(n => Math.round(Math.random() * 100))],
          ["data2", ...[...Array(7)].map(n => Math.round(Math.random() * 100))]
        ]
      ],
      chartData: {
        title: {
          text: 'sample chart'
        },
        data: {
          text: `test`,
          onclick: this.show,
          columns: [],
          types: {
            data1: "line",
            data2: "area-spline"
          },
          colors: {
            data1: "red",
            data2: "green"
          }
      }
      },

    }
  },
  methods: {
    changeData(id) {
      this.chartData.data.columns = this.columns[id]
    },
    show(d) {
      console.log(d)
      this.text = `${d.name}: ${d.value}`;
      console.log(this)
    },
  },
  template: `<div>
    <button v-for="(data, i) in columns" :key="i" @click='changeData(i)'>{{i}}</button>

    <billboard-chart :options='chartData'/>
    <input v-model = "text"/>
    </div>`
  })
