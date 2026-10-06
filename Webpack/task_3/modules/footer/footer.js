import $ from 'jquery';
import './footer.css';

export function initFooter() {
  $(document).ready(() => {
    $('body').append('<p>Copyright - Holberton School</p>');
  });
}
