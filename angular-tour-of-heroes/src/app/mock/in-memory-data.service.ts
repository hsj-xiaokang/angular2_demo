/**
 * @author heshengjin
 * @date 2017-08-24
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
// mock/in-memory-data.service mock数据提供者
// 之后使用服务端的数据就可以去除了mock数据
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes_ = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes_};
  }
}
