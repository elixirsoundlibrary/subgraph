// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Sound extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenID", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
    this.set("licenseCount", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Sound entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Sound must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Sound", id.toString(), this);
    }
  }

  static load(id: string): Sound | null {
    return changetype<Sound | null>(store.get("Sound", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get tokenCID(): string | null {
    let value = this.get("tokenCID");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenCID(value: string | null) {
    if (!value) {
      this.unset("tokenCID");
    } else {
      this.set("tokenCID", Value.fromString(<string>value));
    }
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get licenseCount(): i32 {
    let value = this.get("licenseCount");
    return value!.toI32();
  }

  set licenseCount(value: i32) {
    this.set("licenseCount", Value.fromI32(value));
  }

  get licensees(): Array<string> {
    let value = this.get("licensees");
    return value!.toStringArray();
  }

  set licensees(value: Array<string>) {
    this.set("licensees", Value.fromStringArray(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sounds(): Array<string> {
    let value = this.get("sounds");
    return value!.toStringArray();
  }

  set sounds(value: Array<string>) {
    this.set("sounds", Value.fromStringArray(value));
  }

  get licenses(): Array<string> {
    let value = this.get("licenses");
    return value!.toStringArray();
  }

  set licenses(value: Array<string>) {
    this.set("licenses", Value.fromStringArray(value));
  }
}

export class UserLicense extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromString(""));
    this.set("sound", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserLicense entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserLicense must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserLicense", id.toString(), this);
    }
  }

  static load(id: string): UserLicense | null {
    return changetype<UserLicense | null>(store.get("UserLicense", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get sound(): string {
    let value = this.get("sound");
    return value!.toString();
  }

  set sound(value: string) {
    this.set("sound", Value.fromString(value));
  }
}