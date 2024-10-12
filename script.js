document.addEventListener('DOMContentLoaded', function () {

    let lastChecked = null;
    
    const radios = document.querySelectorAll('input[name="unit"]');
    
    radios.forEach(radio => {
      radio.addEventListener('click', function () {
        
        if (lastChecked === this) {
          this.checked = false;
          lastChecked = null; 
          hideAllContent(); 
        } else {
          lastChecked = this;
          showContentForSelected(this);
        }
      });
    });
  
    hideAllContent();
  
    function hideAllContent() {
      document.querySelectorAll('.main-container').forEach(container => {
        container.querySelector('.mostPopularTag').style.display = 'none';
        container.querySelector('.selection-container').style.display = 'none';
      });
    }
  
    function showContentForSelected(selectedRadio) {
      hideAllContent();
  
      const selectedContainer = selectedRadio.closest('.main-container');
  
      selectedContainer.querySelector('.mostPopularTag').style.display = 'block';
      selectedContainer.querySelector('.selection-container').style.display = 'block';
    }
  });
  