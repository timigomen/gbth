hexo.extend.helper.register('cyberTags', function (options = {}) {
    const env = this
    let source = options.source
    const limit = options.limit

    let result = ''
    if (limit > 0) {
        source = source.limit(limit)
    }

    source.forEach(tag => {

        result += `<a class="cyber-tags-box" href="${env.url_for(tag.path)}"><span class="cyber-tags-name-box"><b class="cyber-tags-name">${tag.name}</b></span><span class="cyber-tags-length">${tag.length}</span></a>`
    })
    return result
})