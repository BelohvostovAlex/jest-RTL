import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../router/AppRouter';
import { store } from '../../store';

export const renderWithRouterAndStore = (component, initialRoute = '/') => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>,
  );
};
