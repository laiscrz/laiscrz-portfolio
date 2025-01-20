function filterSkills(category) {
  document.querySelectorAll('.company').forEach(company => {
    company.classList.remove('activeSkill');
  });

  const activeCategory = document.querySelector(`.company.${category}`);
  if (activeCategory) {
    activeCategory.classList.add('activeSkill');
  }

  document.querySelectorAll('.card').forEach(card => {
    card.style.display = 'none'; 
  });

  document.querySelectorAll(`.card.${category}`).forEach(card => {
    card.style.display = 'block';  
  });
}

document.addEventListener('DOMContentLoaded', function () {
  filterSkills('backend');  

  document.querySelector('.company.backend').addEventListener('click', () => filterSkills('backend'));
  document.querySelector('.company.frontend').addEventListener('click', () => filterSkills('frontend'));
  document.querySelector('.company.database').addEventListener('click', () => filterSkills('database'));
  document.querySelector('.company.tools').addEventListener('click', () => filterSkills('tools'));
});
