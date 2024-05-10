document.addEventListener('DOMContentLoaded', function() {
    const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const items = JSON.parse(localStorage.getItem('items')) || [];

    function clearAll () {
      const checkboxes = document.querySelectorAll(".checklist input[type=checkbox]")
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
      });
    }

    function checkAll () {
      const checkboxes = document.querySelectorAll(".checklist input[type=checkbox]")
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = true;
      });
    }

    function addItem(e) {
      e.preventDefault();
      const text = (this.querySelector('[name=item]')).value;
      const item = {
        text,
        done:false
      };

      items.push(item);
      populateList(items, itemsList);
      localStorage.setItem('items',JSON.stringify(items));
      this.reset();
    }

    function populateList(plates = [],platesList) {
      platesList.innerHTML = plates.map((plate, i) => {
        return `
          <li class="checklist">
            <input type="checkbox" data-index=${i} id="items${i}" ${plate.done ? 'checked' : ''}/>
            <label for="items${i}">${plate.text}</label>
          </li>
        `;
      }).join('');
    };

    function toggleDone (e) {
      if (!e.target.matches('input')) return;
      const el = e.target;
      const index = el.dataset.index;
      items[index].done = !items[index].done;
      localStorage.setItem('items',JSON.stringify(items));
      populateList(items,itemsList);
    }

    addItems.addEventListener('submit',addItem);
    itemsList.addEventListener('click',toggleDone);
    document.querySelector('#clearAll').addEventListener('click', clearAll);
    document.querySelector('#checkAll').addEventListener('click', checkAll);

    populateList(items,itemsList);
  });