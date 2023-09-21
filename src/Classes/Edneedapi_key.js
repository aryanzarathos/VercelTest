import Encryption from "./Encryption";
class Storage extends Encryption {
  ResetPasswordApiKey(value) {
    return this.encode(value);
  }
  EncryptKey(value) {
    return this.encode(value);
  }

  DecryptAccessKey() {
    return this.decodeString(process.env.NEXT_PUBLIC_ACCESS_KEY_ENC);
  }
  DecryptAccessId() {
    return this.decodeString(process.env.NEXT_PUBLIC_ACCESS_ID_ENC);
  }
}
export default new Storage();