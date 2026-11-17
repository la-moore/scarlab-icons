import { replace } from '@scarlab-icons/js'

const liked = Math.random() > 0.5
const app = document.querySelector('#app')

app.innerHTML = `<i data-scarlab="${liked ? 'heart' : 'heart-broken'}" data-style="outline"></i>`

const bell = document.createElement('i')
bell.dataset.scarlab = 'bell'
app.append(bell)

replace()
