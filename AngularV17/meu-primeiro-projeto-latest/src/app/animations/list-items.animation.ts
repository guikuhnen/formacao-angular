import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

// export const listItemsAnimation = trigger('list-items', [
export const mediaMax600 = trigger('list-items', [
  transition(':enter', [
    query('li', [
      style({
        background: 'yellow',
        transform: 'translateY(100px)',
      }),

      // Todos os itens da lista serão animados
      // animate('1s'),
      // Stagger executa a animação de cada item com um delay
      stagger('1s', [animate('1s')]),

      // group executa todas as animações ao mesmo tempo
      // group([
      //   animate(
      //     '1s',
      //     style({
      //       background: 'red',
      //       transform: 'translateY(0)'
      //     })),
      // ]),
      // sequence executa as animações uma após a outra
      // sequence([
      //   animate(
      //     '1s',
      //     style({
      //       background: 'red',
      //       transform: 'translateY(0)'
      //     })),
      //   animate(
      //     '2s',
      //     style({
      //       background: 'blue',
      //       transform: 'translateY(0)'
      //     })),
      // ]),
    ]),
  ]),
  //   transition('* => *', [
  transition(':decrement', [ // Para não quebrar quando sair da tela
    query(
      'li:leave',
      [
        style({
          background: 'red',
        }),
        animate(
          '1s',
          style({
            opacity: 0,
          })
        ),
      ],
      { optional: true } // Para não quebrar quando sair da tela
    ), 
  ]),
  transition(':increment', [ // Para não quebrar quando sair da tela
    query(
      'li:enter',
      [
        style({
          background: 'blue',
          transform: 'translateY(100px)',
        }),
        stagger('700ms', [animate('1s')]),
      ],
      { optional: true } // Para não quebrar quando sair da tela
    ),
  ]),
]);

// ...

export const listItemsAnimation = () => {
  if (isMatchMedia(600)) {
    return mediaMax600;
  } else {
    return;
  }
};

const isMatchMedia = (value: number) => {
  return matchMedia(`(max-width: ${value}px)`).matches;
};
