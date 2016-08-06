var createHtml = function () {

  var progTest = {

    getContainer: function () {

      var container = document.createElement('div');
      container.classList.add('container');

      var parent = document.querySelector('body');
      parent.appendChild(container);

    }(),

    getTitle: function () {

      var title = document.createElement('h1');
      title.classList.add('title');
      title.innerHTML = 'Тест по программированию';

      var parent = document.querySelector('.container');
      parent.appendChild(title);

    }(),

    getForm: function () {

      var form = document.createElement('form');
      form.setAttribute('action', '/echo');
      form.setAttribute('method', 'post');

      var parent = document.querySelector('.container');
      parent.appendChild(form);

    }(),

    getLists: function () {

      var lists = document.createElement('ol');

      var parent = document.querySelector('form');
      parent.appendChild(lists);

    }(),

    getList: function () {

      for (i = 0; i < 3; i++) {

        var list = document.createElement('li');
        var parent = document.querySelector('ol');
        parent.appendChild(list);

        var qestion = document.createElement('h3');
        qestion.innerHTML = 'Вопрос №' + (i + 1);

        var parent = document.querySelectorAll('li');
        parent[i].appendChild(qestion);

      }

    }(),

    getAnswer: function () {

      for (i = 0; i < 3; i++) {

        for (j = 0; j < 3; j++) {

          var answer = document.createElement('p');
          answer.innerHTML = '<label>' + '<span></span>' +
            'Вариант ответа №' + (i + 1) + '</label>';

          var parent = document.querySelectorAll('li');
          parent[j].appendChild(answer);

        }

      }

    }(),

    getCheckBox: function () {

      for (i = 0; i < 9; i++) {

        var сheck = document.createElement('input');
        сheck.setAttribute('type', 'checkbox');

        var parent = document.querySelectorAll('span');
        parent[i].insertBefore(сheck, null);

      }

    }(),

    getSubmit: function () {

      var submit = document.createElement('input');
      submit.classList.add('btn');
      submit.setAttribute('type', 'button');
      submit.setAttribute('value', 'Проверить мои результаты');

      var parent = document.querySelector('form');
      parent.appendChild(submit);

    }(),

  };

}();
