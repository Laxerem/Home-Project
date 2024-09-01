
function update_day(document_text) {
    const current_date = new Date();
    const current_time = current_date.getHours()
    
    if (current_time >= 6 && current_time <= 12) {
        document_text.innerHTML = "Доброе утро!"
    }
    else if (current_time >= 12 && current_time <= 18) {
        document_text.innerHTML = "Хорошего дня!"
    }
    else if (current_time >= 18 && current_time <= 24) {
        document_text.innerHTML = "Приятного вечера"
    }
    else if (current_time >= 0 && current_time <= 6) {
        document_text.innerHTML = "Спокойной ночи"
    }
}

export default update_day;