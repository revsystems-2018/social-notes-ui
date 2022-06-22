import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {SnuNotes} from '../api/snu-notes';

@Injectable({
  providedIn: 'root'
})
export class ShowcaseNotesService {

  constructor() {
  }

  public getDataApi(): Observable<SnuNotes[]> {
    const data: SnuNotes[] = [
      {
        id: 1,
        title: 'A popular note #1',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        image: 'https://i.ibb.co/37V3wJW/e6bbb63fb1a7ba8c27dbcb652cbe1860.jpg'
      },
      {
        id: 2,
        title: 'A popular note #2',
        description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ullamcorper sagittis nisi, quis luctus leo elementum sit amet. Fusce id tincidunt eros, eget vehicula elit. Etiam dapibus, leo nec molestie blandit, lacus tortor molestie leo, ut sodales arcu felis non erat.',
        image: 'https://i.ibb.co/GcbNfPJ/5d0249f58a22412bcd135d4475c5c2df.jpg'
      },
      {
        id: 3,
        title: 'A popular note #3',
        description: 'Nunc ac risus vitae orci mattis varius et non dui. Duis ultrices sapien diam, vel auctor augue feugiat vel. Maecenas elementum elit sit amet nisi commodo sodales.',
        image: 'https://i.ibb.co/0KF1dDy/9d191226ee14f55698503ca2d7d57efd.jpg'
      },
      {
        id: 4,
        title: 'A popular note #4',
        description: 'Proin sed dui id erat sollicitudin aliquet sed sit amet magna. Pellentesque rutrum diam et nulla mattis, et blandit arcu maximus.',
        image: 'https://i.ibb.co/jv8SCx4/33cf07b2d4dee0a697b1c8d6ced768b7.jpg'
      },
      {
        id: 5,
        title: 'A popular note #5',
        description: 'Cras interdum dignissim ipsum, quis sollicitudin est. Fusce ultrices vestibulum posuere. Vivamus pretium mi ac orci ullamcorper, eu accumsan felis tincidunt. Etiam et molestie dui. Nunc vitae fringilla arcu, sit amet pretium nulla.',
        image: 'https://i.ibb.co/gDKms0n/42a7a5e998ab2954f60eea50dfcc4b6f.jpg'
      },
      {
        id: 6,
        title: 'A popular note #6',
        description: 'Morbi commodo vestibulum aliquam. Phasellus quis augue tempor, vestibulum justo et, feugiat lacus. Morbi sed lorem eu tortor dapibus malesuada ut at libero.',
        image: 'https://i.ibb.co/vYYBRXw/53b56758ab08f9510492715fc6334301.jpg'
      },
      {
        id: 7,
        title: 'A popular note #7',
        description: 'Proin mollis nisi vel velit maximus pellentesque. Nullam placerat est eu erat varius euismod. Aenean sed felis ut diam ornare vulputate eu vitae lectus.',
        image: 'https://i.ibb.co/YLCjXCP/607bc4e031623e614eb66c152e737792.jpg'
      },
      {
        id: 8,
        title: 'A popular note #8',
        description: 'Praesent in tempor nunc. Nam sagittis diam id purus malesuada, vel tincidunt dolor lacinia. Pellentesque varius et augue vel vehicula. ',
        image: 'https://i.ibb.co/cTq0wDs/b83d5539a3b1a0b54245dc4778eadda6.jpg'
      },
      {
        id: 9,
        title: 'A popular note #9',
        description: 'Vivamus ultricies sapien erat, id sagittis dolor congue ut. Morbi at aliquam sapien, eu maximus dolor. Suspendisse iaculis lectus odio, ut egestas eros imperdiet id.',
        image: 'https://i.ibb.co/vk20rz4/daea6ae17b3ab5577e3eed0313d9944f.jpg'
      },
      {
        id: 10,
        title: 'A popular note #10',
        description: 'Curabitur quis bibendum nibh, nec consectetur ligula. Curabitur commodo ex metus, ac elementum arcu aliquam sed. Vestibulum efficitur nisl et tellus finibus, efficitur placerat eros porttitor.',
        image: 'https://i.ibb.co/kcKYgvK/dbf6c9d4c6cbe669c02d6898586b34c8.jpg'
      },
      {
        id: 11,
        title: 'A popular note #11',
        description: 'Vestibulum dictum ornare purus, quis bibendum diam eleifend sit amet. Quisque tincidunt sapien ut sem dictum, a pharetra augue ultricies.',
        image: 'https://i.ibb.co/4PYv64H/e6b7aea16aeb4933fb1ed86c95f0c0e4.jpg'
      },
      {
        id: 12,
        title: 'A popular note #12',
        description: 'Cras eu turpis non nisi lobortis blandit. Maecenas at suscipit metus. Pellentesque maximus interdum purus, vitae tristique augue pharetra nec.',
        image: 'https://i.ibb.co/1GZsxQp/1c62fb0f4582facbef0436f0ac72b73d.jpg'
      }
    ];

    return of(data).pipe(
      delay(1500)
    );
  }

  public getDataImageLinks(): Observable<string[]> {
    const dataLinks: string[] = [
      'https://i.ibb.co/W0XCznR/image.jpg',
      'https://i.ibb.co/4JYWwBC/1.jpg',
      'https://i.ibb.co/HhGDdjK/2.jpg',
      'https://i.ibb.co/QKnY6nw/3.jpg',
      'https://i.ibb.co/LQDspmv/4.jpg',
      'https://i.ibb.co/PmCPqKL/5.jpg',
      'https://i.ibb.co/SxV2dpK/6.jpg',
      'https://i.ibb.co/0mv5C8Z/7.jpg',
      'https://i.ibb.co/k8zyH1Q/8.jpg',
      'https://i.ibb.co/DDTYjgj/9.jpg'
    ];

    return of(dataLinks).pipe(
      delay(1500)
    );
  }

}
