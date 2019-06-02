export default date => {
  var createAt = new Date(date)
  var time = new Date().getTime() - createAt.getTime()
  if (time < 0) {
    return ''
  } else if (time / 1000 < 60) {
    return '刚刚'
  } else if ((time / (1000 * 60)) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / (1000 * 60 * 60)) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / (1000 * 60 * 60 * 24)) < 31) {
    return parseInt(time / (1000 * 60 * 60 * 24)) + '天前'
  } else {
    return createAt.getFullYear() + '-' + (createAt.getMonth() + 1) + '-' + createAt.getDate()
  }
}
