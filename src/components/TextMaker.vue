<template>
  <div>
    <h1>日付テキストメーカー</h1>
    <div class="container">
      <vuejs-datepicker
        v-model="inputText"
        class="picker"
        :value="inputText"
        :language="ja"
        :format="format" />

      <textarea
        id="date-texts"
        v-model="dateTexts"
        readonly="true" />

      <button
        class="clipcopy"
        data-clipboard-target="#date-texts">
        コピー
      </button>
    </div>
  </div>
</template>

<script>
import vuejsDatepicker from 'vuejs-datepicker'
import {ja} from 'vuejs-datepicker/dist/locale'
import clipboard from 'clipboard'
import moment from 'moment'
moment.locale('ja')

export default {
  name: 'TextMaker',
  components: {
    vuejsDatepicker: vuejsDatepicker
  },

  data () {
    return {
      ja: ja,
      format: 'M/dd(D)',
      inputText: '',
      dateTexts: '',
      clipBoard: null
    }
  },

  watch: {
    inputText: function () {
      console.log(this.inputText)
      const date = moment(this.inputText).format('M/DD(dd)')
      this.dateTexts += `${date},`
    }
  },

  mounted: function () {
    this.clipBoard = new clipboard('.clipcopy')
    this.clipBoard.on('success', function(e) {
      console.info('Action:', e.action)
      console.info('Text:', e.text)
      console.info('Trigger:', e.trigger)
      
      e.clearSelection()
    })
    this.clipBoard.on('error', function(e) {
      alert('コピー失敗')
      console.error('Action:', e.action)
      console.error('Trigger:', e.trigger)
    })
  },
}
</script>

<style scoped>
.picker {
  text-align: center;
  div > input {
    border: 1px ridge #333333;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
}
</style>