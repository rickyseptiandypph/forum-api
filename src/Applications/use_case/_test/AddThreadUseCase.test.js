const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddedThread = require('../../../Domains/threads/entities/AddedThread');
const AddThreadUseCase = require('../AddThreadUseCase');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */

    const useCasePayload = {
      title: 'Title for thread',
      body: 'This is body for thread',
    };

    const useCaseCredential = {
      id: 'user-123',
    };

    const mockAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'Title for thread',
      owner: 'user-123',
    });

    const mockThreadRepository = new ThreadRepository();

    mockThreadRepository.addNewThread = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockAddedThread));

    const getThreadUsecase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });

    const addedThread = await getThreadUsecase.execute(
      useCasePayload,
      useCaseCredential
    );

    expect(addedThread).toStrictEqual(
      new AddedThread({
        id: 'thread-123',
        title: 'Title for thread',
        owner: 'user-123',
      })
    );
  });
});
