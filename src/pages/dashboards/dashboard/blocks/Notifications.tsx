import { getNotifications, Notification } from '@/api/notifications';
import { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>();

  useEffect(() => {
    getNotifications().then(setNotifications);
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h3>Notifications</h3>
        </div>
      </div>

      <div className="card-body flex flex-col gap-4 scrollable grow px-3 py-3 h-[455px]">
        {notifications?.map((notification) => (
          <>
            <div className="flex gap-4">
              {notification.image ? (
                <img
                  src={notification.image}
                  className="size-12 rounded-md object-cover aspect-square"
                />
              ) : (
                <div className="size-12 rounded-md bg-slate-100 aspect-square" />
              )}
              <div>
                <div className="text-gray-800 text-sm font-semibold">{notification.title}</div>
                <div className="text-gray-600 text-xs font-medium line-clamp-2 text-ellipsis">
                  {notification.details}
                </div>
              </div>
            </div>
            <div className="border-b-2 border-dashed" />
          </>
        ))}
      </div>
    </div>
  );
};

export { Notifications };
