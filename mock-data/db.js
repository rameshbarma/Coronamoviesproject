module.exports = () => {
    const db = {
        'categoies' : require('./data/categories.json'),
        'movies-list' : require('./data/movies-list.json'),
        'review' : require('./data/review.json')
    }
    return db
}