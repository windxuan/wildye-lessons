
$.getJSON('./data.json', function(result) {
    $('.nav-top').html(toTree(result.menu, ''));
});

function toTree(data, str) {
    data.forEach(function(val, index) {
        if (val.subset) {
            str += '<li><a href="' + val.link + '"><i class="fa fa-down"></i>' + val.title + '</a><ul>' + createLi(val.subset, '') + '</ul></li>';
        } else {
            str += '<li><a '+ (index === 0 ? 'class="active"' : '') +' href="' + val.link + '">' + val.title + '</a></li>';
        }
    })
    return str;
};

function createLi (list, str) {
    if (!list) return str;
    list.forEach(function(val) {
        if (val.subset) {
            str += '<li><a href="' + val.link + '"><i class="fa fa-right"></i>' + val.title + '</a><ul>' + createLi(val.subset, '') + '</ul></li>';
        } else {
            str += '<li><a href="' + val.link + '"><i class="fa fa-right"></i>' + val.title + '</a></li>';
        }
    });
    return str;
}
