import React, { useEffect, useState } from 'react';
import mainImage from '../../assets/main.png';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../../store/reducers/menu.reducer';
import MenuItem from '../../components/MenuItem/menu-item.component';

const Menu = () => {
  const { menuList } = useSelector((state) => state.menu);
  const [currentTab, setCurrentTab] = useState('All');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTab === 'All') {
      dispatch(getMenu());
    } else {
      dispatch(getMenu(currentTab));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);

  return (
    <div className="bg-white-100 min-h-screen">
      <div className="shadow-md mx-auto">
        <img
          src={mainImage}
          alt="Cafe Pagi header"
          className="w-full h-auto"
        />
      </div>

      <nav className="flex justfy-center">
        <p
          className="px-4 py-2 cursor-pointer"
          onClick={() => setCurrentTab('All')}
        >
          All
        </p>
        <p
          className="px-4 py-2 cursor-pointer"
          onClick={() => setCurrentTab('Breakfast')}
        >
          Breakfast
        </p>
        <p
          className="px-4 py-2 cursor-pointer"
          onClick={() => setCurrentTab('Drinks')}
        >
          Drinks
        </p>
      </nav>
      <div className="grid grid-cols-3 mx-auto justify-center">
        {menuList.map((item, index) => {
          return (
            <MenuItem key={item.id + index} menu={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
