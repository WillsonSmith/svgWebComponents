function Component(name, source) {

  var frag = document.createDocumentFragment();
  //var el = document.createElement(name);
  var onPage = [].slice.call(document.querySelectorAll(name));
  var obj;

  for (var i = 0, l = onPage.length; i < l; i++) {

    obj = document.createElement('object');
    obj.setAttribute('data', source);
    obj.setAttribute('type', 'image/svg+xml');
    obj.setAttribute('width', "100%");
    obj.setAttribute('height', "100%");

    onPage[i].appendChild(obj);

  }


}
