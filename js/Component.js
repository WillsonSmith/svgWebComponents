function Component(name, source) {

  var frag = document.createDocumentFragment();
  //var el = document.createElement(name);
  var onPage = [].slice.call(document.querySelectorAll(name));
  var obj;

  console.log(onPage);

  for (var i = 0, l = onPage.length; i < l; i++) {

    obj = document.createElement('object');
    obj.setAttribute('data', source);
    obj.setAttribute('type', 'image/svg+xml');
    onPage[i].appendChild(obj);

  }


}
