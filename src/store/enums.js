import { Enum } from './modules/enum'
export default {
  noticeTypeEnum: new Enum().add('AD', '系統公告', 1)
    .add('HEALTH', '健康資訊', 2),
  noticeHtmlTypeEnum: new Enum().add('HTML', '網頁', 1)
    .add('VIDEO', '視頻', 2),
  noticeLevelEnum: new Enum().add('LOW', '低', 1)
    .add('NORMAL', '中', 2)
    .add('HIGH', '高', 3),
  checkType: new Enum().add('ALL', '所有模塊', '')
    .add('EXERCISE', '運動操', 'Exercise')
    .add('MOVIE', '電影', 'Movie')
    .add('MUSIC', '音樂', 'Music')
    .add('RADIO', '收音機', 'Radio')
    .add('SERIES', '連續劇', 'Series')
    .add('SHOW', '綜藝', 'Show')
    .add('TRAVEL', '旅遊', 'Travel')
    .add('TV', '電視', 'Tv')

}
