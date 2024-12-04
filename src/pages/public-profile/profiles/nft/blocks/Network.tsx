import { KeenIcon } from '@/components';

interface INetworkItem {
  logo: string;
  info: string;
}
interface INetworkItems extends Array<INetworkItem> {}

const Network = () => {
  const items: INetworkItems = [
    { logo: 'abstract-41', info: 'jennynft' },
    { logo: 'crown-2', info: 'nftmania' },
    { logo: 'briefcase', info: 'jennynft' },
    { logo: 'sms', info: 'jennyklabber' }
  ];

  const renderItems = (item: INetworkItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-2.5">
        <KeenIcon icon={item.logo} className="text-base text-gray-500" />
        <a href="#" className="text-sm leading-none text-gray-900 hover:text-primary-active">
          {item.info}
        </a>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Network</h3>
      </div>

      <div className="card-body">
        <div className="grid gap-y-3.5">
          {items.map((item, index) => {
            return renderItems(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export { Network, type INetworkItem, type INetworkItems };
