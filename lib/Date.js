const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('th-TH');
}

export default formatDate;