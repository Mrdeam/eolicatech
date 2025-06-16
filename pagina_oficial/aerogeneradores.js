 document.addEventListener('DOMContentLoaded', function() {
                var dropdownToggle = document.getElementById('infoDropdown');
                var dropdownMenu = dropdownToggle.nextElementSibling;
                dropdownToggle.addEventListener('click', function(e) {
                  e.preventDefault();
                  if (dropdownMenu.style.display === 'flex') {
                    dropdownMenu.style.display = 'none';
                  } else {
                    dropdownMenu.style.display = 'flex';
                  }
                });
                // Optional: Hide dropdown when clicking outside
                document.addEventListener('click', function(event) {
                  if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                    dropdownMenu.style.display = 'none';
                  }
                });
              });