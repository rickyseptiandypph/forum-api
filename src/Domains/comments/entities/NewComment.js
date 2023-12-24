class NewComment {
  /**
   * @TODO 5
   * Lengkapi kode class entities `NewComment` dengan spesifikasi berikut:
   *
   * 1. Memiliki properti `threadId`, `content`, dan `owner`.
   * 2. Nilai-nilai pada properti tersebut diambil dari
   *    argumen `constructor` yang merupakan object `payload`.
   * 3. Pastikan Anda memverifikasi nilainya sebelum dimasukkan ke properti.
   *    - threadId -> harus terdefinisi dan merupakan `string`
   *    - content -> harus terdefinisi dan merupakan `string`
   *    - owner -> harus terdefinisi dan merupakan `string`
   */
  constructor(payload) {
    this._verifyPayload(payload);
    const { content, threadId, owner } = payload;
    this.content = content;
    this.threadId = threadId;
    this.owner = owner;
  }

  _verifyPayload(payload) {
    const { content, threadId, owner } = payload;
    if (!content || !threadId || !owner) {
      throw new Error('NEW_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (
      typeof content !== 'string' ||
      typeof threadId !== 'string' ||
      typeof owner !== 'string'
    ) {
      throw new Error('NEW_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = NewComment;
