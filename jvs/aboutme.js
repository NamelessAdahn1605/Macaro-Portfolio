const stats = document.getElementById('stats-bt');
const story = document.getElementById('story-bt');
const skills = document.getElementById('skills-bt');

const stats_display = document.getElementById('stats');
const story_display = document.getElementById('story');
const skills_display = document.getElementById('skills');


function tabswitch(tabclicked) {

    if (tabclicked === 'stats') {

        stats.style.border = '5px solid var(--text-color)';
        stats.style.background = 'var(--text-color)';
        stats.style.color = 'var(--background-color)';

        story.style.border = '5px double var(--text-color)';
        story.style.background = 'var(--background-color)';
        story.style.color = 'var(--text-color)';

        skills.style.border = '5px double var(--text-color)';
        skills.style.background = 'var(--background-color)';
        skills.style.color = 'var(--text-color)';

        stats_display.style.display = 'block';
        story_display.style.display = 'none';
        skills_display.style.display = 'none';

        localStorage.setItem('tabset', 'stats-set');

    } else if (tabclicked === 'story') {

        story.style.border = '5px solid var(--text-color)';
        story.style.background = 'var(--text-color)';
        story.style.color = 'var(--background-color)';

        stats.style.border = '5px double var(--text-color)';
        stats.style.background = 'var(--background-color)';
        stats.style.color = 'var(--text-color)';

        skills.style.border = '5px double var(--text-color)';
        skills.style.background = 'var(--background-color)';
        skills.style.color = 'var(--text-color)';

        stats_display.style.display = 'none';
        story_display.style.display = 'block';
        skills_display.style.display = 'none';

        localStorage.setItem('tabset', 'story-set');

    } else {

        skills.style.border = '5px solid var(--text-color)';
        skills.style.background = 'var(--text-color)';
        skills.style.color = 'var(--background-color)';

        stats.style.border = '5px double var(--text-color)';
        stats.style.background = 'var(--background-color)';
        stats.style.color = 'var(--text-color)';

        story.style.border = '5px double var(--text-color)';
        story.style.background = 'var(--background-color)';
        story.style.color = 'var(--text-color)';

        stats_display.style.display = 'none';
        story_display.style.display = 'none';
        skills_display.style.display = 'block';

        localStorage.setItem('tabset', 'skills-set');

    }

}

let mytab = localStorage.getItem('tabset');

if (mytab === 'stats-set') {
    tabswitch('stats');
} else if (mytab === 'story-set') {
    tabswitch('story');
} else if (mytab === 'skills-set') {
    tabswitch('skills');
}