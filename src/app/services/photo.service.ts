import { Injectable } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { UserModule } from '../modules/user/user.module';

@Injectable({
  providedIn: 'root',
  useClass: UserModule
})
export class PhotoService {
  public beforeUpload(
    file: NzUploadFile,
    _fileList: NzUploadFile[]
  ): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      const isCorrectFormat =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isCorrectFormat) {
        console.log('format error');
        observer.complete();
        return;
      }
      const isLessThan700Kb = file.size! / 1024 < 700;
      if (!isLessThan700Kb) {
        console.log('size error');
        observer.complete();
        return;
      }
      observer.next(isCorrectFormat && isLessThan700Kb);
      observer.complete();
    });
  }
  public getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }
}
